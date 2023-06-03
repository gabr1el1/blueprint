import { showProjects } from "./DOM";

const todoItem = function(title,description,dueDate,priority,checked = false){

    return {title,description,dueDate,priority,checked};
}
const project = function(name){
    let todos = [];

    const addToDo = function(title,description,dueDate,priority){
        todos.push(todoItem(title,description,dueDate,priority));
    }
    return {name, todos};
}

const myProjects = (function(){
    let projects = [];
    
    const addProject = function(prName){
        projects.push(project(prName));
        showProjects(projects);
    }
    addProject("DEFAULT");
    return {addProject}
})();

export {myProjects};