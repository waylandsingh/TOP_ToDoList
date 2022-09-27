function makeDropdown(targetnode, ...args) {
    const dropdownOptions = args
    //dropdownOptions is an array of html elements that'll be in the dropdown
    dropdownOptions.forEach((option)=>targetnode.appendChild(option))


    return 
}

function makeUseLessElement(text) {
    const ele = document.createElement('p')
    ele.classList.add('useless')
    ele.innerText = text
    ele.style.display = "none"
    return ele
}

window.addEventListener('load',()=>{

    //test the header dropdown
    const dropdown = document.getElementById("projectList")
    const something1 = makeUseLessElement('number 1')
    const something2 = makeUseLessElement('another one, huzzah')
    makeDropdown(dropdown, something1, something2)

    dropdown.addEventListener('click', ()=>{

        const children = Array.from(dropdown.children)

        // //js to change state
        children.forEach((child)=>{
            if (child.style.display=="none"){
            child.style.display = "block"}
            else {
                child.style.display = "none"
            }
        })
    })

    // select form, input and list to  
    // get input, input values and access to task container

    const form = document.getElementById("new-task-form")
    const input = document.getElementById("new-task-input")
    const task_list_el = document.getElementById("tasks")

    //event listener for submission of new task
    form.addEventListener('submit', (event)=>{
        // prevent refreshing of the page
        event.preventDefault()
        const text_inputted = input.value

        // console.log(input.value)
        // create container for the task
        const task_el = document.createElement('div')
        task_el.classList.add("task")
        task_list_el.appendChild(task_el)

        // create the task content
        const task_content_el = document.createElement('div')
        task_content_el.classList.add("content")
        task_el.appendChild(task_content_el)

        // add content element as an input to read the input value into content
        const task_input_el = document.createElement('input')
        task_content_el.appendChild(task_input_el)

        task_input_el.classList.add("text")
        task_input_el.type = "text"
        task_input_el.value = text_inputted
        // make an input read only
        task_input_el.setAttribute('readonly', 'readonly')

        // add buttons for edit and delete
        task_actions_el = document.createElement('div')
        task_actions_el.classList.add('actions')
        task_el.append(task_actions_el)

        const edit = document.createElement('button')
        edit.classList.add('edit')
        task_actions_el.appendChild(edit)
        edit.innerText = 'EDIT'

        const delete_button = document.createElement('button')
        delete_button.classList.add('delete')
        task_actions_el.appendChild(delete_button)
        delete_button.innerText = 'DELETE'

        edit.addEventListener('click', () =>{
            // IF the button reads "edit"
            console.log("clicked")
            if (edit.innerText.toLowerCase() == 'edit') {
                //edits allowed
                task_input_el.removeAttribute('readonly')
                // edit button highlights the form field
                task_input_el.focus()
                //change the text of the button
                edit.innerText = 'SAVE'
            }
               
            else {
                // switch back to edit
                edit.innerText = 'EDIT'
                // set the "readonly" attribute
                task_input_el.setAttribute('readonly', 'readonly')
            }
            })
        
        // event listener for delete button
        delete_button.addEventListener('click', () => {
            // remove the parent element from the list
            console.log('removing',task_el)
            task_el.remove()
        })


    })
        
    // 
})