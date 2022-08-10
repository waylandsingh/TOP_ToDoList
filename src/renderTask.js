import task from "./task";
import Pubsub from "./Pubsub";


// pass in the actual Task object ?
// task, getTaskDetails
export default function renderTask(container,
    task, getTaskDetails, setTaskName, setTaskDesc, setTaskDue, 
    setTaskPriority
    ) {
    // probably wise to separate this into own module
    const renderTaskHTML = ({ID, name, desc, due, priority}) => {
        
        taskDiv.innerHTML = `
            <span class='task-name'>${name}</span>
            <span class='task-priority'>${priority}</span>
            <span class='task-due'>${due}</span>
            <p>${desc}</p>
        `
    return 
    } 

    const nameChange = () => {
        console.log(ID, name, desc, due, priority)
        const newName = prompt("new name plz")
        console.log(newName)
        pubsub.publish(ID+"_name", newName)
        console.log(getTaskDetails(task)) //is in same lexical scope as the outer task
        renderTaskHTML(getTaskDetails(task))
    }


    
    // Future - deal with this dependency on task/getTaskDetails
    var {ID, name, desc, due, priority} = getTaskDetails(task)

    //create the task container and populate it with the task info
    let taskDiv = document.createElement("div")
    taskDiv.classList = 'task'
    taskDiv.id = ID
    renderTaskHTML(getTaskDetails(task))

    // pubsub manages updates in task properties
    const pubsub = new Pubsub()
    
    pubsub.subscription(ID + "_name", setTaskName).subscribe()
    
    // add event listener to take input, call publish changes, rerender
    const editNameButton = document.createElement("button")
    editNameButton.innerText = 'edit taskName'

    taskDiv.appendChild(editNameButton)
    editNameButton.addEventListener("click", nameChange)

    
    console.log(getTaskDetails(task))
    
    container.appendChild(taskDiv)
}