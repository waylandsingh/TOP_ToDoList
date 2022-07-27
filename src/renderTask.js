import task from "./task";

export default function renderTask({name, desc, due, priority}) {
    //returns HTML object that can be appended to any DOM object
    // Reminder: uses object destucturing to auto add args to scope
    let task = document.createElement("div")
    task.classList = 'task'
    task.innerHTML = `
        <span class='task-name'>${name}</span>
        <span class='task-priority'>${priority}</span>
        <span class='task-due'>${due}</span>
        <p>${desc}</p>
    `
    return task
}