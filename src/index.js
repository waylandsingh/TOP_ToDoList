import './index.css';
import task from './task';
import renderTask from './renderTask';
import project from './project';
import renderProject from './renderProject';


const container = document.createElement("div");
container.id = "container"
document.body.appendChild(container);

const exampletask = {
    name:'dogwash',
    desc:'wash the gawd',
    due: '7/28',
    priority:'high'}

const exampletasktoo = {
    name:'aaff',
    desc:'dfffd the gawd',
    due: '7/28',
    priority:'hidddgh'}

const blah = task(exampletask)

// render test
// container.appendChild(renderTask(blah.getAllDetails()));

// modifying a given task
let testTasklist = [blah]
let meh = project();
meh.addTask(exampletask)
meh.selectTask('1234').setName('okay bruv') // successful demo of getting the name and setting it from outside of projects
console.log(meh.selectTask('1234').getName())

// project rendering 
// where do event listeners for updating fall into the mix?
meh.addTask(exampletasktoo)
const demoTaskList = meh.sortTaskList().map((t)=>t.getAllDetails())
console.log(...demoTaskList)
container.appendChild(renderProject(...demoTaskList))