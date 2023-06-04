import { showProjects } from "./DOM";

const todoItem = function(title,description,dueDate,priority,checked = false){

    return {title,description,dueDate,priority,checked};
}
const Project = function(name){
    let todos = [];

    const addToDo = function(title,description,dueDate,priority){
        todos.push(todoItem(title,description,dueDate,priority));
    }
    return {name, todos};
}

const MyProjects = function(){
    let projects = [];
    
    const addProj = function(prName){
        projects.push(Project(prName));
    }
    const showProjs= function(){
        showProjects(projects);
    }
    addProj("DEFAULT");
    
    return {addProj,showProjs}
}

export {MyProjects};