
const todoItem = function(projectBelong,title,description,dueDate,priority,checked = false){

    return {projectBelong,title,description,dueDate,priority,checked};
}
const Project = function(name){
    let todos = [];

    const addTodo= function(projectBelong,title,description,dueDate,priority){
        let todo = todoItem(projectBelong,title,description,dueDate,priority)
        todos.push(todo);
    }

    return {name,addTodo, get todos(){return todos}};
}

const MyProjects = (function(){
    let projects = [];
    
    const addProj = function(prName){
        projects.push(Project(prName));
    }

    addProj("DEFAULT");
    
    return {addProj,get projects(){return projects}};
})();

const editTodo = function(oldProj,oldInd,newProj,title,description,dueDate,priority){
    
    let newVerTodo = todoItem(newProj,title,description,dueDate,priority);
    
    //We remove the todo from the project it was on
    MyProjects.projects[oldProj].todos.splice(oldInd,1);
    MyProjects.projects[newProj].addTodo(
        newVerTodo.projectBelong,
        newVerTodo.title,
        newVerTodo.description,
        newVerTodo.dueDate,
        newVerTodo.priority
    ); 
    
    console.log(MyProjects.projects);
}

const checkTodoDone = function(projectInd, todoInd, checked){
    MyProjects.projects[projectInd].todos[todoInd].checked = checked;
}

export {MyProjects, todoItem, editTodo, checkTodoDone};