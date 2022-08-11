import project from "./project";
import renderTask from "./renderTask";
import Pubsub from "./Pubsub";

export default function renderProject(DOMcontainer, getTaskDetails, ...taskList) {
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
        // if not blank, publish changes to taskid
        // blank, return without doing anything
        
        // modify the name of the task in the database?!
        
        console.log(editID, editName)
        return {editID, editName}
    }

    // new pubsub object

    for (const t of taskList) {
        let newTask = renderTask(t)

        // new subscription for task 't'

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