import { project, projGetTaskList, projAddTask } from "./project";
import renderTask from "./renderTask";
import Pubsub from "./Pubsub";

export default function renderProject(DOMcontainer, project) {
  function appendTaskHTML(node, task) {
    renderTask(node, task);
  }

  function renderAllTasks() {
    projectHTML.innerHTML = "";
    for (const t of projGetTaskList(project)) {
      let newTaskDiv = document.createElement("div");
      appendTaskHTML(newTaskDiv, t);
      // delete, complete, etc here?
      // delete publishers here for individual tasks

      projectHTML.appendChild(newTaskDiv);
    }
  }

  function addTask() {
    // show the form for task info input!

    pubsub.publish("addTask", project, "blah", "ah,", "sdasd", "ss");
    // placeholder for render one more task at the bottom of the list

    // spin this off into its own function (reRenderAllTasks)
    // should be modular function  within renderproject
    renderAllTasks();
  }

  const pubsub = new Pubsub();
  let projectHTML = document.createElement("div");
  projectHTML.classList = "project";
  let editBar = document.createElement("div");
  editBar.classList = editBar;

  renderAllTasks();

  // add eventlistner/pubsub to add task and render it at the bottomr
  pubsub.subscription("addTask", projAddTask).subscribe();
  const addTaskButton = document.createElement("button");
  addTaskButton.innerText = "Add Task";

  addTaskButton.addEventListener("click", addTask);

  addTaskForm = document.createElement("div");
  addTaskForm.classList = "addTaskForm";

  // form inputs HTML block
  // form submit button
  // publish to addTask
  // renderAllTasks
  // collapse/hide form block
  // form cancel button
  // collapse/hide form block

  editBar.appendChild(addTaskButton);

  DOMcontainer.appendChild(projectHTML);
  DOMcontainer.appendChild(editBar);
  return;
}
