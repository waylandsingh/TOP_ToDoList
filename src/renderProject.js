import {project, projGetTaskList, projAddTask} from "./project";
import renderTask from "./renderTask";
import Pubsub from "./Pubsub";

export default function renderProject(DOMcontainer, project) {
    function appendTaskHTML(node, task) {
        renderTask(
            node, task
            )
    }

    function addTask() {
        pubsub.publish("addTask", project, "blah", "ah,", "sdasd","ss")
        // placeholder for render one more task at the bottom of the list
        
        // spin this off into its own function (reRenderAllTasks)
        projectHTML.innerHTML = ''
        for (const t of projGetTaskList(project)) {
            let newTaskDiv = document.createElement("div")
            appendTaskHTML(newTaskDiv, t)
            // delete, complete, etc here?
            // delete publishers here for individual tasks
    
            projectHTML.appendChild(newTaskDiv)
            
        }
    }

    const pubsub = new Pubsub()
    let projectHTML = document.createElement("div")
    projectHTML.classList = 'project'
    let editBar = document.createElement("div")
    editBar.classList = editBar
    
    // add eventlistner/pubsub to add task and render it at the bottomr
    pubsub.subscription("addTask", projAddTask).subscribe()
    const addTaskButton = document.createElement("button")
    addTaskButton.innerText = "Add Task"
    addTaskButton.addEventListener("click", addTask)
    editBar.appendChild(addTaskButton)
    
    // add all the initial projects in the taskList(which can be empty) 
    for (const t of projGetTaskList(project)) {
        let newTaskDiv = document.createElement("div")
        appendTaskHTML(newTaskDiv, t)
        // delete, complete, etc here?
        // delete publishers here for individual tasks

        projectHTML.appendChild(newTaskDiv)
        
    }

    projectHTML.appendChild(editBar)

    DOMcontainer.appendChild(projectHTML)
    return
}