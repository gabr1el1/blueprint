
const todoItem = function(projectBelong,title,description,dueDate,priority,checked = false){
    return {projectBelong,title,description,dueDate,priority,checked};
}

const Project = function(name){
    let todos = [];

    const addTodo= function(projectBelong,title,description,dueDate,priority,checked = false){
        let todo = todoItem(projectBelong,title,description,dueDate,priority,checked)
        todos.push(todo);
        if(storageAvailable("localStorage")){
            updateLocalStorage();
        }
    }

    return {name,addTodo, get todos(){return todos}, set todos(todoList){todos = todoList}};
}

const MyProjects = (function(){
    let projects = [];
    
    const addProj = function(prName){
        
        if(storageAvailable("localStorage")){
            projects.push(Project(prName));
            updateLocalStorage();
        }else{
            projects.push(Project(prName));
        }

    }
    return {addProj,get projects(){return projects}, set projects(projs){projects = projs}};
})();

const editTodo = function(oldProj,oldInd,newProj,title,description,dueDate,priority,checked){
    
    let newVerTodo = todoItem(newProj,title,description,dueDate,priority,checked);
    
    //We remove the todo from the project it was on
    MyProjects.projects[oldProj].todos.splice(oldInd,1);
    MyProjects.projects[newProj].addTodo(
        newVerTodo.projectBelong,
        newVerTodo.title,
        newVerTodo.description,
        newVerTodo.dueDate,
        newVerTodo.priority,
        newVerTodo.checked
    ); 
    
    if(storageAvailable("localStorage")){
        updateLocalStorage(); 
    }
}

const checkTodoDone = function(projectInd, todoInd, checked){
    MyProjects.projects[projectInd].todos[todoInd].checked = checked;
    console.log(MyProjects.projects)
    if(storageAvailable("localStorage")){
        updateLocalStorage(); 
    }
}

const deleteTodo = function(projInd, todoInd){
    MyProjects.projects[projInd].todos.splice(todoInd,1);
    if(storageAvailable("localStorage")){
        updateLocalStorage(); 
    }
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
    return (
        e instanceof DOMException &&
        // everything except Firefox
            (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

const updateLocalStorage = function(){
    localStorage.setItem("MyProjects",JSON.stringify(MyProjects.projects));
}

export {MyProjects, Project, editTodo, checkTodoDone, deleteTodo, storageAvailable};