import project from "./project";
import renderTask from "./renderTask";
import Pubsub from "./Pubsub";

export default function renderProject(
    DOMcontainer, getTaskDetails, taskList, setTaskName, 
    setTaskDesc, setTaskDue, setTaskPriority
    ) {
    let projectHTML = document.createElement("div")
    projectHTML.classList = 'project'
    let editBar = document.createElement("div")
    editBar.classList = editBar
    editBar.innerHTML = `
        <button class='project-add'}>Add Task</button>

        `

    // add 


    for (const t of taskList) {
        let newTaskDiv = document.createElement("div")
        renderTask(
            newTaskDiv, t, getTaskDetails, setTaskName, 
            setTaskDesc, setTaskDue,setTaskPriority
            )
        // delete , complete, etc here?
        // delete publishers here for individual tasks

        projectHTML.appendChild(newTaskDiv)
        
    }

    projectHTML.appendChild(editBar)

    DOMcontainer.appendChild(projectHTML)
    return
}