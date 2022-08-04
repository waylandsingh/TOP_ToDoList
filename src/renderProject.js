import project from "./project";
import renderTask from "./renderTask";

export default function renderProject(DOMcontainer, ...taskList) {
    let projectHTML = document.createElement("div")
    projectHTML.classList = 'project'
    let editBar = document.createElement("div")
    editBar.classList = editBar
    editBar.innerHTML = `
        <button class='project-add'}>Add Task</button>

    `
    console.log('renderproject called')

    const editName = function() {
        console.log(this)
        let editID = this.id
        //access the ID of the parent
        let editName = prompt('New name? leave blank for no change')
        // when discarded, return without doing anything
        // console.log(projectHTML)
        // when saved
        // modify the name of the task in the database?!
        // re-render the task when saved
        console.log(editID, editName)
        return {editID, editName}
    }
    // <button class='project-edit'>Edit Project</button>
    // <button display:"none">Save Edits</button>

    // is it a safe assumption that taskList is an array?
    // should taskList instead be taskList iterator? (dependency inversion?)
    // REALLY not nice call here -  has to call forEach AND getAllData...
    // taskList.forEach((task)=>projectHTML.appendChild(renderTask(task.getAllDetails())))
    
    // better but still relies on .getAllDetails - what's the refactor look like?
    // adjust the input! refactor complete
    for (const t of taskList) {
        let newTask = renderTask(t)

        // add editing capability (likely moved to own module)
        let editbutton = document.createElement('button')
        editbutton.addEventListener("click", editName)
        editbutton.innerText = "Edit Task"
        newTask.appendChild(editbutton)

        projectHTML.appendChild(newTask)
        
    }

    projectHTML.appendChild(editBar)

    DOMcontainer.appendChild(projectHTML)
    return
}