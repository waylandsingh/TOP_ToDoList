import {
  task,
  extractTaskDetails as getTaskDetails,
  setTaskName,
  setTaskDesc,
  setTaskDue,
  setTaskPriority,
} from "./task";
import Pubsub from "./Pubsub";

// pass in the actual Task object ?
// task, getTaskDetails
export default function renderTask(container, task) {
  // probably wise to separate this into own module
  const renderTaskHTML = ({ ID, name, desc, due, priority }) => {
    // closure with taskDetails - infers the DOM object from the enclosing function
    taskDetails.innerHTML = `
            <span class='task-name'>${name}</span>
            <span class='task-priority'>${priority}</span>
            <span class='task-due'>${due}</span>
            <p>${desc}</p>
        `;

    return;
  };

  const nameChange = () => {
    console.log(ID, name, desc, due, priority);
    const newName = prompt("new name plz");
    pubsub.publish(ID + "_name", task, newName);
    console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
    renderTaskHTML(getTaskDetails(task));
  };

  const descChange = () => {
    console.log(ID, name, desc, due, priority);
    const newDesc = prompt("new name plz");
    pubsub.publish(ID + "_desc", task, newDesc);
    console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
    renderTaskHTML(getTaskDetails(task));
  };

  const dueChange = () => {
    console.log(ID, name, desc, due, priority);
    const newDue = prompt("new due plz");
    pubsub.publish(ID + "_due", task, newDue);
    console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
    renderTaskHTML(getTaskDetails(task));
  };

  const priorityChange = () => {
    console.log(ID, name, desc, due, priority);
    const newPrio = prompt("new priority plz");
    pubsub.publish(ID + "_priority", task, newPrio);
    console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
    renderTaskHTML(getTaskDetails(task));
  };

  // Future - deal with this dependency on task/getTaskDetails
  let { ID, name, desc, due, priority } = getTaskDetails(task);
  console.log(getTaskDetails(task));
  //create the task container and populate it with the task info
  let taskDiv = document.createElement("div");
  taskDiv.classList = "task";
  taskDiv.id = ID;
  const taskDetails = document.createElement("div");
  taskDetails.id = ID + "details";
  taskDiv.appendChild(taskDetails);

  //initial render of the task object
  renderTaskHTML(getTaskDetails(task));

  // pubsub manages updates in task properties
  const pubsub = new Pubsub();

  pubsub.subscription(ID + "_name", setTaskName).subscribe();
  pubsub.subscription(ID + "_desc", setTaskDesc).subscribe();
  pubsub.subscription(ID + "_due", setTaskDue).subscribe();
  pubsub.subscription(ID + "_priority", setTaskPriority).subscribe();

  // add event listeners to take input, call publish changes, rerender
  const editNameButton = document.createElement("button");
  editNameButton.innerText = "edit taskName";
  taskDiv.appendChild(editNameButton);
  editNameButton.addEventListener("click", nameChange);

  const editDescButton = document.createElement("button");
  editDescButton.innerText = "edit Description";
  taskDiv.appendChild(editDescButton);
  editDescButton.addEventListener("click", descChange);

  const editDueButton = document.createElement("button");
  editDueButton.innerText = "edit Due";
  taskDiv.appendChild(editDueButton);
  editDueButton.addEventListener("click", dueChange);

  const editPrioButton = document.createElement("button");
  editPrioButton.innerText = "edit Priority";
  taskDiv.appendChild(editPrioButton);
  editPrioButton.addEventListener("click", priorityChange);

  container.appendChild(taskDiv);
}
