import './index.css';
import task from './task';
import renderTask from './renderTask';
import project from './project';


const container = document.createElement("div");
container.id = "container"
document.body.appendChild(container);

const exampletask = {
    name:'dogwash',
    desc:'wash the gawd',
    due: '7/28',
    priority:'high'}


const blah = task(exampletask)
// blah.setPriority('nvm it is not a big deal')
// console.log(blah.getAllDetails())

container.appendChild(renderTask(blah.getAllDetails()));
 
let testTasklist = [blah]
let meh = project({taskList:testTasklist, createTask:task, renderMethod:renderTask});
meh.selectTask('1234').setName('okay bruv') // successful demo of getting the name and setting it from outside of projects
console.log(meh.selectTask('1234').getName())
