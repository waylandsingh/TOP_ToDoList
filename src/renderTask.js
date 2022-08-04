import task from "./task";
// need a 3d piece; eventlistener management
// manages communication between task object and can call "renderTask"



export default function renderTask({ID, name, desc, due, priority}) {
    //returns HTML object that can be appended to any DOM object
    // Reminder: uses object destucturing to auto add args to scope

    console.log("task rendered")

    let task = document.createElement("div")
    task.classList = 'task'
    task.id = ID
    console.log(ID)
    task.innerHTML = `
        <span class='task-name'>${name}</span>
        <span class='task-priority'>${priority}</span>
        <span class='task-due'>${due}</span>
        <p>${desc}</p>
    `

    
    return task
}