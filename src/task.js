export default function task({name, desc, due, priority}) {
    // instantiate and return HTML object corresponding to a task 
    // OR inst and return JSON? <- think this is the play
    // properties:
    // name, description, due date, priority 
    // ID <- from combination of name and duedate
    // name, desc, due, priority are already destructured and variables in scope
    let taskObject = {

        getName(){
            return name;
        },
        getDesc(){
            return desc
        },
        getDue(){
            return due
        },
        getPriority() {
            return priority
        },
        getAllDetails() {
            return {name, desc, due, priority}
        },
        setName(newName){
            name=newName
        },
        setDesc(newDesc){
            desc=newDesc
        },
        setDue(newDue){
            due=newDUe
        },
        setPriority(newPriority){
            priority=newPriority
        },

    }

    
    return taskObject
} 