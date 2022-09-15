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
    const taskRefactor = document.createElement('div')
    
    taskDetails.innerHTML = `
                              <input type="text"
                                  class="taskinput, task_name"
                                  value="${name}"
                                  readonly 
                              >

                              <input type="text"
                                  class="taskinput, task_priority"
                                  value="${priority}"
                                  readonly 
                              >
                              <input type="text"
                                  class="taskinput, task_due"
                                  value="${due}"
                                  readonly 
                              >
                              <input type="text"
                                  class="taskinput, task_desc"
                                  value="${desc}"
                                  readonly 
                              >

                            `;

    return;
  };




  const allChange = () => {
    console.log(ID, name, desc, due, priority);
    // const newName = prompt("new name plz");
    const taskChangeDiv = document.getElementById(ID+'details')
    // console.log(editAllButton.innerHTML)
    if (editAllButton.innerHTML == "Change em All!") {
      for (let c of taskChangeDiv.children) {
          // console.log(c.value)
          c.removeAttribute("readonly")
        
      }
      editAllButton.innerHTML = 'Save'
    }
    else {
      // here be the publish calls
      for (let c of taskChangeDiv.children) {
        // console.log(c.value)
        editAllButton.innerHTML = 'Change em All!'
        // failing right here!
        // how to get the updated value from c
        const newValue = c.value
        console.log(newValue)

        const pubType = c.classList[1].slice(4,)
        console.log(pubType, newValue)
        pubsub.publish (ID + pubType, task, newValue)
        
        c.setAttribute('readonly','readonly')


      //automaticall extract and call Change functions
      }
      renderTaskHTML(getTaskDetails(task));

    }
    
    // pubsub.publish(ID + "_name", task, newName);
    // console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
  };
  
  // const nameChange = () => {
  //   console.log(ID, name, desc, due, priority);
  //   const newName = prompt("new name plz");
  //   pubsub.publish(ID + "_name", task, newName);
  //   console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
  //   renderTaskHTML(getTaskDetails(task));
  // };
  // const descChange = () => {
  //   console.log(ID, name, desc, due, priority);
  //   const newDesc = prompt("new name plz");
  //   pubsub.publish(ID + "_desc", task, newDesc);
  //   console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
  //   renderTaskHTML(getTaskDetails(task));
  // };

  // const dueChange = () => {
  //   console.log(ID, name, desc, due, priority);
  //   const newDue = prompt("new due plz");
  //   pubsub.publish(ID + "_due", task, newDue);
  //   console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
  //   renderTaskHTML(getTaskDetails(task));
  // };

  // const priorityChange = () => {
  //   console.log(ID, name, desc, due, priority);
  //   const newPrio = prompt("new priority plz");
  //   pubsub.publish(ID + "_priority", task, newPrio);
  //   console.log(getTaskDetails(task)); //is in same lexical scope as the outer task
  //   renderTaskHTML(getTaskDetails(task));
  // };

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

  const editAllButton = document.createElement("button")
  editAllButton.innerText = 'Change em All!'
  taskDiv.appendChild(editAllButton)
  editAllButton.addEventListener('click', allChange)

  // // add event listeners to take input, call publish changes, rerender
  // const editNameButton = document.createElement("button");
  // editNameButton.innerText = "edit taskName";
  // taskDiv.appendChild(editNameButton);
  // editNameButton.addEventListener("click", nameChange);

  // const editDescButton = document.createElement("button");
  // editDescButton.innerText = "edit Description";
  // taskDiv.appendChild(editDescButton);
  // editDescButton.addEventListener("click", descChange);

  // const editDueButton = document.createElement("button");
  // editDueButton.innerText = "edit Due";
  // taskDiv.appendChild(editDueButton);
  // editDueButton.addEventListener("click", dueChange);

  // const editPrioButton = document.createElement("button");
  // editPrioButton.innerText = "edit Priority";
  // taskDiv.appendChild(editPrioButton);
  // editPrioButton.addEventListener("click", priorityChange);

  container.appendChild(taskDiv);
}
