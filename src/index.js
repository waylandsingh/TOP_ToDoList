import "./index.css";
import { task, extractTaskDetails } from "./task";
import renderTask from "./renderTask";
import { project } from "./project";
import renderProject from "./renderProject";
import Pubsub from "./Pubsub";

const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

const exampletask = {
  ID: new Date().getTime(),
  name: "dogwash",
  desc: "wash the gawd",
  due: "7/28",
  priority: "high",
};

const exampletasktoo = {
  ID: new Date().getTime(),
  name: "aaff",
  desc: "dfffd the gawd",
  due: "7/28",
  priority: "hidddgh",
};

const t1 = task(exampletask);
const t2 = task(exampletasktoo);
// refactored task, render task to use pubsub for initial rendering and updating buttons

// renderTask(
//     container,
//     t1,t1.getAllDetails, t1.setName, t1.setDesc,
//     t1.setDue, t1.setPriority
// )
console.log("okay");

let meh = project();
meh.addTask(extractTaskDetails(t1));
meh.addTask(extractTaskDetails(t2));
// const demoTaskList = meh.taskList
renderProject(container, meh);

// does this mean I'm re-making tasks inside the project ?
// yes this is the intended way to add tasks

// //pubsub pattern test here
// const taskpubsub = new Pubsub()

// // example workflow of subscribing the renderprojct to the topic of task about dogwashing
// taskpubsub.subscription("dogwash", renderProject).subscribe()

// // example of publish call when, for instance demotaskLIst is updated
// taskpubsub.publish("dogwash", container, ...demoTaskList) //needs to spread out the object params
// render test
// container.appendChild(renderTask(t1.getAllDetails()));
// console.log(t1.getID())
// modifying a given task

// // meh.selectTask(blah.getID()).setName('okay bruv') // successful demo of getting the name and setting it from outside of projects
// // console.log(meh.selectTask(blah.getID()).getName())

// // project rendering
// // where do event listeners for updating fall into the mix?

// meh.addTask(exampletasktoo)
// console.log(...demoTaskList)
