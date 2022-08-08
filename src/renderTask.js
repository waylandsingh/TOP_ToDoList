import task from "./task";
// pubsub import?


// pass in the actual Task object ?
// task, getTaskDetails
export default function renderTask(
    task, getTaskDetails, setTaskName, setTaskDesc, setTaskDue, 
    setTaskPriority
    ) {
    //returns HTML object that can be appended to any DOM object
    // Reminder: uses object destucturing to auto add args to scope
    
    let {ID, name, desc, due, priority} = getTaskDetails(task)
    console.log("task rendered")

    let taskDiv = document.createElement("div")
    taskDiv.classList = 'task'
    taskDiv.id = ID
    console.log(ID)
    taskDiv.innerHTML = `
        <span class='task-name'>${name}</span>
        <span class='task-priority'>${priority}</span>
        <span class='task-due'>${due}</span>
        <p>${desc}</p>
    `

    
    return taskDiv
}