# TOP_ToDoList

## Project Structure Notes

### Classes
Class: `todo` - the task class, with properties: `title, desc, dueDate, priority...`
Class: `project` - organizes tasks (like a folder) (other optional features?)

### DOM Manipulation
index.js - calls other modules for page rendering, creates default project
userInterface.js - calls modules for adding, deleting, updating/completing tasks & adding/deleting projects
tasks.js - module for CRUD on tasks
projects.js - module for add/delete projects (auto-move projects from deleted into default?)

### npm modules
localStorage - allows for persistent JSON data to store teh tasks