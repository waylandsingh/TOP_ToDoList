import task from "./task";
// need a 3d piece; eventlistener management
// manages communication between task object and can call "renderTask"



export default function renderTask({ID, name, desc, due, priority}) {
    //returns HTML object that can be appended to any DOM object
    // Reminder: uses object destucturing to auto add args to scope

    const editName = function() {
        console.log(this.parentElement)
        //access the ID of the parent

        // when discarded, return without doing anything

        // when saved
        // modify the name of the task in the database?!
        // re-render the task when saved

        return 1
    }

    let task = document.createElement("div")
    task.classList = 'task'
    task.id = ID
    task.innerHTML = `
        <span class='task-name'>${name}</span>
        <span class='task-priority'>${priority}</span>
        <span class='task-due'>${due}</span>
        <p>${desc}</p>
    `

    // add editing capability 
    let editbutton = document.createElement('button')
    editbutton.addEventListener("click", editName)
    editbutton.innerText = "Edit Task"

    task.appendChild(editbutton)
    return task
}