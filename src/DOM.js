import "./styles.css";
import logoSrc from "./assets/logoShortWhite.png";
import { myProjects } from "./logic";
let myProj;

function initialPage(){
    
    const content = document.querySelector("#content");
    const contentInfo = document.createElement("div");
    contentInfo.setAttribute("id","content-info");

    const header = document.createElement("header");
    header.insertAdjacentHTML("afterbegin",
    `
    <ul><li><img src="${logoSrc}" id="logo"></li><li><input type="text" placeholder="Search"></li></ul>
    <ul><li><i class="fa-solid fa-plus" id="add-task" title="Add task"></i></li></ul>
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

    //myProj VARIABLE OBJECT CREATION
    myProj = myProjects();
    
}

const AddProjModal = function(){
    let activeModal = false;

    //CONSTUCT MODAL HTML
    const divModal = document.createElement("div");
    divModal.classList.add("add-proj-modal","modal");
    divModal.innerHTML = 
    `
    <div class="inner-modal">
        <div class="modal-title">
            <h2>New project</h2>
        </div>
        <div class="modal-info">
            <div>
                <h3>Name</h3>
                <input type="text" id="project-name" size="30" required>
            </div>
        </div>
        <div class="modal-buttons">
            <button id="cancel-add-pr" class="cancel-btn btn">Cancel</button>
            <button id="conf-add-pr" class="conf-btn btn" >Add</button>
        </div>
    </div>
    `

    const showModal = function(){
        if(!activeModal){
            

            //WE ADD THE MODAL TO THE PAGE
            document.querySelector("#content").appendChild(divModal);
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
            removeModal);
            ////
            activeModal=true;
        } 
    }
    const validation = function(){
        let valid = false;
        const confBtn = document.querySelector("#conf-add-pr");
        const projNameInpt = document.querySelector("#project-name");
        if(projNameInpt.value.length>0){
            valid = true;
        }else{
            valid=false;
        }
        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }
    }

    const removeModal = function(){
        divModal.remove();
        activeModal=false;
    }

    const addProj = function(projName){
        myProj.addProject(projName);
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
        itemProj.addEventListener("click",()=>console.log(index));
        projectsItems.appendChild(itemProj);
    });
    document.querySelector("#project-list").appendChild(projectsItems);
}

export {initialPage,showProjects};