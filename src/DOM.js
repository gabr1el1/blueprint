import "./styles.css";
import logoSrc from "./assets/logoShortWhite.png";
import { MyProjects } from "./logic";

/*
TODOS: 
--Ampliar la longitud maxima para los titulos de proyecto y TODO
--Modificar codigo de AddProjectModal para guardar el DOM como 
en AddTodoModal
--Mostrar los todos en su respectivo proyecto
*/
function initialPage(){
    
    const content = document.querySelector("#content");
    const contentInfo = document.createElement("div");
    contentInfo.setAttribute("id","content-info");

    const header = document.createElement("header");
    header.insertAdjacentHTML("afterbegin",
    `
    <ul><li><img src="${logoSrc}" id="logo"></li><li><input type="text" placeholder="Search"></li></ul>
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
    const addProjModal = AddProjModal();
    btnAddProject.addEventListener("click",function(){
        addProjModal.showModal();
    });

    const logo = document.querySelector("#logo");
    logo.addEventListener("click",function(){
        const projList = document.querySelector("#project-list")
        projList.classList.toggle("hide");
    });

    const btnAddTodo = document.querySelector("#add-todo");
    const addTodoModal = AddTodoModal();
    btnAddTodo.addEventListener("click",function(){
        addTodoModal.showModal();
    })

    showProjects(MyProjects.projects);
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
    VARIABLE activeModal in the scope of Modal

    ONE WAY TO ACCESS this variable is using getters
    and setters functions

    Some info and examples : https://stackoverflow.com/questions/65590114/factory-function-method-not-updating-variable 
    */

    return {modal,
            get activeModal(){return activeModal}, 
            set activeModal(bool){activeModal = bool},
            removeModal
        };
}
const AddProjModal = function(){
    
    const prototype = Modal();

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
                    <label for="pr-name-length">Name between 0 and 20 characters</label>
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
        const confBtn = document.querySelector("#conf-add-pr");
        //VALIDATION
        document.querySelector("#project-name").addEventListener("keyup",
        validation);

        ////BINDINGS THE BUTTONS ONCE THE MODAL IS APPENDED ON DOCUMENT
        confBtn.disabled = true;
        confBtn.addEventListener("click",
        function(){
            const projectName = document.querySelector("#project-name").value;
            addProj(projectName);
        });
        document.querySelector("#cancel-add-pr").addEventListener("click",
        prototype.removeModal);
        ////
    }

    const validation = function(){
        let valid = false;
        const confBtn = document.querySelector("#conf-add-pr");
        const goodLenCheck = document.querySelector("#pr-name-length");

        const projNameInpt = document.querySelector("#project-name");
        if(projNameInpt.value.length>0 && projNameInpt.value.length<20){
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

    const addProj = function(projName){
        MyProjects.addProj(projName);
        showProjects(MyProjects.projects);
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
                        <option value="High">
                            High
                        </option>
                        <option value="Medium">
                            Medium
                        </option>
                        <option value="Low">
                            Low
                        </option>
                        <option value="Very low">
                            Very low
                        </option>
                    </select>
                </div>
            </div>
            <div class="modal-input-errors">
                <div>
                    <label for="todo-title-length">Name between 0 and 20 characters</label>
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
            addToDo(parseInt(projSelect.value),titleInput.value,descriptionText.value,dueDateInput.value,prioritySelect.value);

        });
        document.querySelector("#cancel-add-todo").addEventListener("click",
        prototype.removeModal);
        ////
    }

    const validation = function(){
        let valid = false;
        const confBtn = document.querySelector("#conf-add-todo");
        
        if(titleInput.value.length>0 && titleInput.value.length<20){
            valid = true;
            goodLenCheck.checked = true;
        }else{
            valid=false;
            goodLenCheck.checked = false;
        }

        if(dueDateInput.value!==""){
            valid=true;
            goodDateCheck.checked=true;
        }else{
            valid=false;
            goodDateCheck.checked=false;
        }

        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }

    }

    const addToDo = function(projBelong,title,description,dueDate,priority){
        MyProjects.projects[projBelong].addToDo(title,description,dueDate,priority);
        console.log(MyProjects.projects[projBelong]);

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
        //itemProj.addEventListener("click",()=>console.log(index));
        projectsItems.appendChild(itemProj);
    });
    document.querySelector("#project-list").appendChild(projectsItems);
}




export {initialPage,showProjects};