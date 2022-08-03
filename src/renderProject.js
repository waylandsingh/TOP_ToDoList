import project from "./project";
import renderTask from "./renderTask";

export default function renderProject(...taskList) {
    let projectHTML = document.createElement("div")
    projectHTML.classList = 'project'
    let editBar = document.createElement("div")
    editBar.classList = editBar
    editBar.innerHTML = `
        <button class='project-add'}>Add Task</button>

    `
    // <button class='project-edit'>Edit Project</button>
    // <button display:"none">Save Edits</button>

    // is it a safe assumption that taskList is an array?
    // should taskList instead be taskList iterator? (dependency inversion?)
    // REALLY not nice call here -  has to call forEach AND getAllData...
    // taskList.forEach((task)=>projectHTML.appendChild(renderTask(task.getAllDetails())))
    
    // better but still relies on .getAllDetails - what's the refactor look like?
    // adjust the input! refactor complete
    for (const t of taskList) {
        projectHTML.appendChild(renderTask(t))
    }

    projectHTML.appendChild(editBar)

    return projectHTML
}