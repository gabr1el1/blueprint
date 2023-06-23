import "./styles.css";
import logoSrc from "./assets/logoShortWhite.png";
import { MyProjects,todoItem,editTodo, checkTodoDone} from "./logic.js";
let activeTab = 0;
/*
TODOS: 
--Agregar Local Storage
*/

function initialPage(){
    
    const content = document.querySelector("#content");
    const contentInfo = document.createElement("div");
    contentInfo.setAttribute("id","content-info");

    const header = document.createElement("header");
    header.insertAdjacentHTML("afterbegin",
    `
    <ul><li><img src="${logoSrc}" id="logo"></li><li></li></ul>
    <ul><li><i class="fa-solid fa-plus" id="add-todo" title="Add todo"></i></li></ul>
    `
    );

    const projectList = document.createElement("ul");
    projectList.setAttribute("id","project-list");
    projectList.insertAdjacentHTML("afterbegin",
    `
    <ul>
    <li><h2>My projects</h2><i class="fa-solid fa-plus" id="add-project" title="Add project"></i></li>
    </ul>
    `);
    const projectInfo = document.createElement("div");
    projectInfo.setAttribute("id","project-info");

    content.appendChild(header);
    contentInfo.appendChild(projectList);
    contentInfo.appendChild(projectInfo);
    content.appendChild(contentInfo);

    //BINDINGS
    const btnAddProject = document.querySelector("#add-project");
    
    btnAddProject.addEventListener("click",function(){
        const addProjModal = AddProjModal();
        addProjModal.showModal();
    });

    const logo = document.querySelector("#logo");
    logo.addEventListener("click",function(){
        const projList = document.querySelector("#project-list")
        projList.classList.toggle("hide");
    });

    const btnAddTodo = document.querySelector("#add-todo");
    btnAddTodo.addEventListener("click",function(){
        const addTodoModal = AddTodoModal();
        addTodoModal.showModal();
    });
    console.log(JSON.parse(localStorage.getItem("MyProjects")));
    showProjects(MyProjects.projects);
    showToDos(MyProjects.projects[0].todos);
}

const Modal = function(){
    let activeModal = false;
    //Create modal element
    const modal = document.createElement("div");
    modal.classList.add("modal");
    
    const removeModal = function(){
        modal.remove();
        activeModal=false;
    }
    /*-----------------ATTENTION------------------
    //return {modal,activeModal,removeModal};
    
    Here this Modal factory is returning an object,
    when accesing the activeModal property you are
    accesing the object property ITSELF BUT NOT THE 
    VARIABLE activeModal in the scope of Modal wich is using 
    removeModal method

    ONE WAY TO ACCESS this variable is using getters
    and setters functions

    Some info and examples : 
    https://stackoverflow.com/questions/65590114/factory-function-method-not-updating-variable 
    */

    return {modal,
            get activeModal(){return activeModal}, 
            set activeModal(bool){activeModal = bool},
            removeModal
        };
}
const AddProjModal = function(){
    
    const prototype = Modal();

    let confBtn,projName,cancelBtn, goodLenCheck;

    const buildModal = function(){
        prototype.modal.innerHTML = 
        `
        <div class="inner-modal">
            <div class="modal-title">
                <h2>New project</h2>
            </div>
            <div class="modal-info">
                <div class="modal-row">
                    <h3>Name</h3>
                    <input type="text" id="project-name" size="30">
                </div>
            </div>
            <div class="modal-input-errors">
                <div>
                    <label for="pr-name-length">Name between 1 and 50 characters</label>
                    <input type="checkbox" id="pr-name-length" disabled>
                </div>
            </div>
            <div class="modal-buttons">
                <button id="cancel-add-pr" class="cancel-btn btn">Cancel</button>
                <button id="conf-add-pr" class="conf-btn btn" >Add</button>
            </div>
        </div>
        `;
    }

    const showModal = function(){
        if(!prototype.activeModal){
            //WE BUILD THE MODAL
            buildModal();
            //MODAL IS ACTIVE
            prototype.activeModal=true;
            //WE ADD THE MODAL TO THE PAGE
            document.querySelector("#content").appendChild(prototype.modal);
            bindingModal();
        } 
    }

    const bindingModal = function(){
        //SAVE SOME DOM
        confBtn = document.querySelector("#conf-add-pr");
        projName = document.querySelector("#project-name");
        cancelBtn = document.querySelector("#cancel-add-pr");
        goodLenCheck = document.querySelector("#pr-name-length");
        //VALIDATION
        projName.addEventListener("keyup",
        validation);

        ////BINDINGS THE BUTTONS ONCE THE MODAL IS APPENDED ON DOCUMENT
        confBtn.disabled = true;
        confBtn.addEventListener("click",
        function(){
            MyProjects.addProj(projName.value);
            showProjects(MyProjects.projects);
            prototype.removeModal();
        });
        cancelBtn.addEventListener("click",
        prototype.removeModal);
        ////
    }

    const validation = function(){
        let valid = false;

        if(projName.value.length>0 && projName.value.length<50){
            valid = true;
            goodLenCheck.checked = true;
        }else{
            valid=false;
            goodLenCheck.checked = false;
        }

        
        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }
    }
    return {showModal};
}

const AddTodoModal = function(){
    const prototype = Modal();
    
    let projSelect;
    let titleInput;
    let descriptionText;
    let dueDateInput;
    let prioritySelect;

    let goodLenCheck;
    let goodDateCheck;

    let confBtn;

    const buildModal = function(){
        prototype.modal.innerHTML = 
        `
        <div class="inner-modal">
            <div class="modal-title">
                <h2>New TODO for: </h2>`+
                (function(){
                    let htmlString = `<select id="projects-for-todo">`;
                    MyProjects.projects.forEach(function(project,index){
                        htmlString+=`<option value="${index}">${project.name}</option>`
                    });
                    htmlString+=`</select>`;
                    return htmlString;
                })()+
            `</div>
            <div class="modal-info">
                <div class="modal-row">
                    <h2>TODO title</h2>
                    <input id="todo-title" type="text">
                </div>
                <div class="modal-row">
                    <h2>Description</h2>
                    <textarea id="todo-description"></textarea>
                </div>
                <div class="modal-row">
                    <h2>Due date</h2>
                    <input id="todo-duedate" type="date">
                </div>
                <div class="modal-row">
                    <h2>Priority</h2>
                    <select id="todo-priority">
                        <option value="very-low">
                            Very low
                        </option>
                        <option value="low">
                            Low
                        </option>
                        <option value="medium">
                            Medium
                        </option>
                        <option value="high">
                            High
                        </option>
                    </select>
                </div>
            </div>
            <div class="modal-input-errors">
                <div>
                    <label for="todo-title-length">Title between 1 and 50 characters</label>
                    <input type="checkbox" id="todo-title-length" disabled>
                    <label for="todo-date">Pick a date</label>
                    <input type="checkbox" id="todo-date" disabled>
                </div>
            </div>
            <div class="modal-buttons">
                <button id="cancel-add-todo" class="cancel-btn btn">Cancel</button>
                <button id="conf-add-todo" class="conf-btn btn" >Add</button>
            </div>
        <div/>`;
    }  

    const showModal = function(){
        if(!prototype.activeModal){
            //WE BUILD THE MODAL
            buildModal();
            //MODAL IS ACTIVE
            prototype.activeModal=true;
            //WE ADD THE MODAL TO THE PAGE
            document.querySelector("#content").appendChild(prototype.modal);
            bindingModal();
        } 
    }

    const bindingModal = function(){
        //SAVE SOME DOM
        
        projSelect = document.querySelector("#projects-for-todo");
        titleInput = document.querySelector("#todo-title");
        descriptionText = document.querySelector("#todo-description");
        dueDateInput = document.querySelector("#todo-duedate");
        prioritySelect = document.querySelector("#todo-priority");
        goodLenCheck = document.querySelector("#todo-title-length");
        goodDateCheck = document.querySelector("#todo-date");
        confBtn = document.querySelector("#conf-add-todo");

        //VALIDATION
        titleInput.addEventListener("keyup",
        validation);
        dueDateInput.addEventListener("change",
        validation
        );
        ////BINDINGS THE BUTTONS ONCE THE MODAL IS APPENDED ON DOCUMENT
        confBtn.disabled = true;
        confBtn.addEventListener("click",
        function(){
            MyProjects.projects[parseInt(projSelect.value)].addTodo(parseInt(projSelect.value),titleInput.value,descriptionText.value,dueDateInput.value,prioritySelect.value);
            if(activeTab==parseInt(projSelect.value)){
                showToDos(MyProjects.projects[parseInt(projSelect.value)].todos);
            }
            showProjects(MyProjects.projects);
            prototype.removeModal();
        });

        document.querySelector("#cancel-add-todo").addEventListener("click",
        prototype.removeModal);
    }

    const validation = function(){
        let valid = true;
        goodLenCheck.checked = true;
        goodDateCheck.checked=true;
        const confBtn = document.querySelector("#conf-add-todo");
        
        if(titleInput.value.length==0 || titleInput.value.length>50){
            valid = false;
            goodLenCheck.checked = true;
        }

        if(dueDateInput.value==""){
            valid=false;
            goodDateCheck.checked=false;
        }

        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }

    }

    return {showModal};

}

const EditTodoModal = function(){
    const prototype = Modal();
    
    let projSelect;
    let titleInput;
    let descriptionText;
    let dueDateInput;
    let prioritySelect;

    let goodLenCheck;
    let goodDateCheck;

    let confBtn;

    let oldInd, oldProj;

    const buildModal = function(){
        prototype.modal.innerHTML = 
        `
        <div class="inner-modal">
            <div class="modal-title">
                <h2>Edit TODO: </h2>`+
                (function(){
                    let htmlString = `<select id="projects-for-todo">`;
                    MyProjects.projects.forEach(function(project,index){
                        htmlString+=`<option value="${index}">${project.name}</option>`
                    });
                    htmlString+=`</select>`;
                    return htmlString;
                })()+
            `</div>
            <div class="modal-info">
                <div class="modal-row">
                    <h2>TODO title</h2>
                    <input id="todo-title" type="text">
                </div>
                <div class="modal-row">
                    <h2>Description</h2>
                    <textarea id="todo-description"></textarea>
                </div>
                <div class="modal-row">
                    <h2>Due date</h2>
                    <input id="todo-duedate" type="date">
                </div>
                <div class="modal-row">
                    <h2>Priority</h2>
                    <select id="todo-priority">
                        <option value="very-low">
                            Very low
                        </option>
                        <option value="low">
                            Low
                        </option>
                        <option value="medium">
                            Medium
                        </option>
                        <option value="high">
                            High
                        </option>
                    </select>
                </div>
            </div>
            <div class="modal-input-errors">
                <div>
                    <label for="todo-title-length">Title between 0 and 50 characters</label>
                    <input type="checkbox" id="todo-title-length" disabled>
                    <label for="todo-date">Pick a date</label>
                    <input type="checkbox" id="todo-date" disabled>
                </div>
            </div>
            <div class="modal-buttons">
                <button id="cancel-add-todo" class="cancel-btn btn">Cancel</button>
                <button id="conf-edit-todo" class="conf-btn btn" >Edit</button>
            </div>
        <div/>`;
    }  

    const showModal = function(oldIndex,projectIndex){
        if(!prototype.activeModal){
            oldInd = oldIndex;
            oldProj = projectIndex;

            const todoToEdit = MyProjects.projects[projectIndex].todos[oldIndex];
            //WE BUILD THE MODAL
            buildModal();
            //MODAL IS ACTIVE
            prototype.activeModal=true;
            //WE ADD THE MODAL TO THE PAGE
            document.querySelector("#content").appendChild(prototype.modal);

            bindingModal();

            projSelect.value = todoToEdit.projectBelong;
            titleInput.value = todoToEdit.title;
            descriptionText.value = todoToEdit.description;
            dueDateInput.value = todoToEdit.dueDate;
            prioritySelect.value = todoToEdit.priority;

            //validate modal first because information is not meant to be empty
            validation();
        } 
    }

    const bindingModal = function(){
        //SAVE SOME DOM
        
        projSelect = document.querySelector("#projects-for-todo");
        titleInput = document.querySelector("#todo-title");
        descriptionText = document.querySelector("#todo-description");
        dueDateInput = document.querySelector("#todo-duedate");
        prioritySelect = document.querySelector("#todo-priority");
        goodLenCheck = document.querySelector("#todo-title-length");
        goodDateCheck = document.querySelector("#todo-date");
        confBtn = document.querySelector("#conf-edit-todo");
        
        
        //VALIDATION
        titleInput.addEventListener("keyup",
        validation);
        dueDateInput.addEventListener("change",
        validation
        );
        ////BINDINGS THE BUTTONS ONCE THE MODAL IS APPENDED ON DOCUMENT
        confBtn.disabled = true;
        confBtn.addEventListener("click",
        function(){
            editTodo(oldProj,oldInd,parseInt(projSelect.value),titleInput.value,descriptionText.value,dueDateInput.value,prioritySelect.value);
            if(activeTab==oldProj){
                showToDos(MyProjects.projects[oldProj].todos);
            }
            prototype.removeModal();
            showProjects(MyProjects.projects);
        });
        document.querySelector("#cancel-add-todo").addEventListener("click",
        prototype.removeModal);
        
    }

    const validation = function(){
        let valid = true;
        goodLenCheck.checked = true;
        goodDateCheck.checked=true;

        if(titleInput.value.length==0 || titleInput.value.length>=50){
            valid=false;
            goodLenCheck.checked = false;
        }

        if(dueDateInput.value==""){
            valid=false;
            goodDateCheck.checked=false;
        }

        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }

    }

    return {showModal};
}

const showProjects = function(projectList){
    let projectsItems;
    if(document.querySelector("#projects-items")===null){
        projectsItems = document.createElement("ul");
        projectsItems.setAttribute("id","projects-items");
    }else{
        projectsItems = document.querySelector("#projects-items");
    }
    projectsItems.innerHTML = "";
    projectList.forEach((item,index) => {
        const itemProj = document.createElement("li");
        itemProj.innerHTML = `
        <span>${item.name}</span><span title="${item.todos.length} todos">${item.todos.length}</span>
        `;
        itemProj.addEventListener("click",function(){
            showToDos(MyProjects.projects[index].todos);
            activeTab = index;
        })
        projectsItems.appendChild(itemProj);
    });
    document.querySelector("#project-list").appendChild(projectsItems);
}

const showToDos= function(todoList){
    const projInfo = document.querySelector("#project-info");
    projInfo.innerHTML="";
    
    todoList.forEach(function(todo,index){
        let itemTodo = document.createElement("div");
        itemTodo.classList.add("todo",todo.priority);
        itemTodo.innerHTML = `
            <div>
                <h3 class="todo-title">${todo.title}</h3>
                <h3>Due: ${todo.dueDate}</h3>
                <p>
                    <i class="fa-solid fa-circle-info see-edit-todo" title="See / edit" data-id=${index} data-project=${todo.projectBelong}></i>
                    <label for="${index}">Done?</label>`+
                    (function(){
                        if(todo.checked){
                            return `<input class="check-done-todo" type="checkbox" data-id=${index} data-project=${todo.projectBelong} checked>`;
                        }else{
                            return `<input class="check-done-todo" type="checkbox" data-id=${index} data-project=${todo.projectBelong}>`;
                        }
                    })()+
                    `
                    <i class="fa-solid fa-trash delete-todo" title="Delete Todo" data-id=${index} data-project=${todo.projectBelong}></i>
                </p>
                
            </div>
        `;
        projInfo.appendChild(itemTodo);
    });
    Array.from(document.querySelectorAll(".see-edit-todo")).forEach(button=>{
        button.addEventListener("click",
        function(){
            const editTodoModal = EditTodoModal();
            editTodoModal.showModal(parseInt(this.dataset.id),parseInt(this.dataset.project));
            //editTodoModal.showModal(this.dataset.id,this.dataset.project);
        });
    });

    Array.from(document.querySelectorAll(".check-done-todo")).forEach(check=>{
        check.addEventListener("change",
        function(){
            checkTodoDone(this.dataset.project,this.dataset.id,this.checked);
        });
    });

    Array.from(document.querySelectorAll(".delete-todo")).forEach(button=>{
        button.addEventListener("click",function(){
            MyProjects.projects[this.dataset.project].todos.splice(this.dataset.id,1);
            showToDos(MyProjects.projects[this.dataset.project].todos);
            showProjects(MyProjects.projects);
        })
    })
}


export {initialPage,showProjects,showToDos};