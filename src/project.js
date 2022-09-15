import { task, extractTaskDetails } from "./task";
// idea: another factory function; one of the properties is an array of tasks

function projGetTaskList(proj) {
  return proj.sortTaskList();
}

function projAddTask(proj, ID, name, desc, due, priority) {
  proj.addTask({ ID, name, desc, due, priority });
}

function project() {
  // define function to edit tasks? this is probably best done
  // implement ID for tasks
  let taskList = new Array();
  const selectTask = function (taskID) {
    const idxOfTask = taskList.findIndex((t) => t.ID == taskID);
    return taskList[idxOfTask]; // will allow calling of getters/setter in the index.js scope
  };

  const addTask = function ({ ID, name, desc, due, priority }) {
    // wraps task creating
    const newTask = task({ ID, name, desc, due, priority });
    taskList.push(newTask);
    console.log(newTask.getAllDetails());
    return newTask; //return tasklist? return task?
  };

  const sortTaskList = function () {
    // think @ params for sorting
    // think about return - return the sorted taskList? (think yes)
    return taskList;
  };
  return {
    // createTask,
    // renderMethod, // questionable if this needs to be here, or somewhere else
    selectTask,
    addTask,
    sortTaskList,
  };
}

export { project, projGetTaskList, projAddTask };
