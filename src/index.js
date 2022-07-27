import './index.css';
import task from './task';
import renderTask from './renderTask';

const container = document.createElement("div");
container.id = "container"
document.body.appendChild(container);

const exampletask = {
    name:'dogwash',
    desc:'wash the gawd',
    due: '7/28',
    priority:'high'}


const blah = task(exampletask)
blah.setPriority('nvm it is not a big deal')
console.log(blah.getAllDetails())

container.appendChild(renderTask(blah.getAllDetails()))