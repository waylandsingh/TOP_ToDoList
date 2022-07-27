import task from "./task"
// idea: another factory function; one of the properties is an array of tasks

// does project need to know how to render tasks? probably can be passed a rendering function

export default function project() {
    // define function to edit tasks? this is probably best done
    // implement ID for tasks
    let taskList = new Array()
    const selectTask = function(taskID) {
        const idxOfTask = taskList.findIndex((t)=>t.ID == taskID)
        return taskList[idxOfTask]// will allow calling of getters/setter in the index.js scope
    } 

    const addTask = function({name, desc, due, priority}) {
        // wraps task creating 
        taskList.push(task({name, desc, due, priority}))
        return 'blah' //return tasklist? return task?
    }

    const sortTaskList = function() {
        // think @ params for sorting
        // think about return - return the sorted taskList? (think yes)
        return taskList
    }
    return {
        // taskList,
        // createTask,
        // renderMethod, // questionable if this needs to be here, or somewhere else
        selectTask,
        addTask,
        sortTaskList
    }
}