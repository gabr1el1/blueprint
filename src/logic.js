import { showProjects } from "./DOM";

const todoItem = function(projectBelong,title,description,dueDate,priority,checked = false){

    return {projectBelong,title,description,dueDate,priority,checked};
}
const Project = function(name){
    let todos = [];

    const addToDo = function(projectBelong,title,description,dueDate,priority){
        todos.push(todoItem(projectBelong,title,description,dueDate,priority));
    }
    const addToDoItem = function(todoItem){
        todos.push(todoItem);
    }
    return {name,addToDo,addToDoItem, get todos(){return todos}};
}

const MyProjects = (function(){
    let projects = [];
    
    const addProj = function(prName){
        projects.push(Project(prName));
    }

    addProj("DEFAULT");
    
    return {addProj,get projects(){return projects}};
})();

export {MyProjects};