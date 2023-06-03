import "./styles.css";
import logoSrc from "./assets/logoShortWhite.png";
import { myProjects } from "./logic";

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
        projList.classList.toggle("not-display");
    });
    
}

const AddProjModal = function(){
    let activeModal = false;

    //CONSTUCT MODAL HTML
    const divModal = document.createElement("div");
    divModal.classList.add("add-proj-modal","modal");
    divModal.innerHTML = 
    `
    <div class="inner-modal">
        <div>
            <h2>New project</h2>
        </div>
        
        <div>
            <h3>Name</h3>
            <input type="text">
        </div>
        <div>
            <button id="cancel-add-pr">Cancel</button>
            <button id="conf-add-pr">Add</button>
        </div>
    </div>
    `

    const showModal = function(){
        if(!activeModal){
            document.querySelector("#content").appendChild(divModal);
            ////BINDINGS THE BUTTONS ONCE THE MODAL IS APPENDED ON DOCUMENT
            document.querySelector("#conf-add-pr").addEventListener("click",
            removeModal);
            document.querySelector("#cancel-add-pr").addEventListener("click",
            removeModal);
            
            activeModal=true;
        }
        
    }

    const removeModal = function(){
        divModal.remove();
        activeModal=false;
    }
    
    return {showModal};
}

const showProjects = function(projectList){
projectList.forEach(element => {
});
}

export {initialPage,showProjects};