export default function task({ID, name, desc, due, priority}) {
    // instantiate and return HTML object corresponding to a task 
    // OR inst and return JSON? <- think this is the play
    // properties:
    // name, description, due date, priority 
    // ID <- from combination of name and duedate
    // name, desc, due, priority are already destructured and variables in scope
    // const ID = new Date().getTime() // need to get a better way to generate these without hard coding (dates?)

    let taskObject = {
        getID(){
            return ID
        },
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
            return {ID, name, desc, due, priority}
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