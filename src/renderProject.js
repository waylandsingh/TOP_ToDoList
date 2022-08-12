import project from "./project";
import renderTask from "./renderTask";
import Pubsub from "./Pubsub";

export default function renderProject(DOMcontainer, getTaskDetails, taskList, setTaskName, setTaskDesc, setTaskDue, setTaskPriority) {
    let projectHTML = document.createElement("div")
    projectHTML.classList = 'project'
    let editBar = document.createElement("div")
    editBar.classList = editBar
    editBar.innerHTML = `
        <button class='project-add'}>Add Task</button>

    `
    console.log('renderproject called')

    for (const t of taskList) {
        console.log(t)
        //make div for task
        let newTaskDiv = document.createElement("div")
        //get task info, including setting/getting functions 
        renderTask(newTaskDiv, t, getTaskDetails, setTaskName, setTaskDesc, setTaskDue,setTaskPriority)

        // add editing capability (likely moved to own module)
        //renderTask(newTaskDiv, the task, and more)

        projectHTML.appendChild(newTaskDiv)
        
    }

    projectHTML.appendChild(editBar)

    DOMcontainer.appendChild(projectHTML)
    return
}