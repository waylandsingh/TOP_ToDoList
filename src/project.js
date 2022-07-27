// idea: another factory function; one of the properties is an array of tasks

// does project need to know how to render tasks? probably can be passed a rendering function

export default function project({taskList, createTask, renderMethod}) {
    // define function to edit tasks? this is probably best done
    // implement ID for tasks
    const selectTask = function(taskID) {
        const idxOfTask = taskList.findIndex((t)=>t.ID == taskID)
        return taskList[idxOfTask]// will allow calling of getters/setter in the index.js scope
    } 
    return {
        taskList,
        createTask,
        renderMethod, // questionable if this needs to be here, or somewhere else
        selectTask
    }
}