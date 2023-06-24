import { initialPage, showProjects, showToDos} from "./DOM.js";
import { storageAvailable, MyProjects,Project} from "./logic.js";

initialPage();

if (storageAvailable("localStorage")) {
    
    if(localStorage.getItem("MyProjects")){
        JSON.parse(localStorage.getItem("MyProjects")).forEach((project,index) => {
            MyProjects.projects.push(Project(project.name));
            MyProjects.projects[index].todos = project.todos;
        });
        showProjects(JSON.parse(localStorage.getItem("MyProjects")));
        showToDos(JSON.parse(localStorage.getItem("MyProjects"))[0].todos);

    }else{

        MyProjects.projects.push(Project("DEFAULT"));
        localStorage.setItem("MyProjects", JSON.stringify(MyProjects.projects));
        showProjects(JSON.parse(localStorage.getItem("MyProjects")));
        showToDos(JSON.parse(localStorage.getItem("MyProjects"))[0].todos);

    }
} else {
    showProjects(MyProjects.projects);
    showToDos(MyProjects.projects[0].todos);
}

export {storageAvailable};