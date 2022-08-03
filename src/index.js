import './index.css';
import task from './task';
import renderTask from './renderTask';
import project from './project';
import renderProject from './renderProject';
import Pubsub from './Pubsub'


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

const t1 = task(exampletask)

//pubsub pattern test here


// render test
// container.appendChild(renderTask(t1.getAllDetails()));
// console.log(t1.getID())
// modifying a given task
// let testTasklist = [t1]
// let meh = project();
// meh.addTask(t1)
// // meh.selectTask(blah.getID()).setName('okay bruv') // successful demo of getting the name and setting it from outside of projects
// // console.log(meh.selectTask(blah.getID()).getName())

// // project rendering 
// // where do event listeners for updating fall into the mix?


// meh.addTask(exampletasktoo)
// const demoTaskList = meh.sortTaskList().map((t)=>t.getAllDetails())
// console.log(...demoTaskList)
// container.appendChild(renderProject(...demoTaskList))