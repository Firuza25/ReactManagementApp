import NewProject from "./NewProject";
import { useState } from "react";
import NoProjectSelected from "./NoProjectSelected";
import ProjectsSidebar from "./ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({ 
    selectedPtojectId: undefined,//nothing
    projects: []
   });

   function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedPtojectId: null,//adding new project
      }
    });
   }

   function handleAddProject(projectData){
    setProjectsState(prevState =>{
      const projectId = Math.random
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedPtojectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
   }

   


   let content;
   if(projectsState.selectedPtojectId === null){
    content = <NewProject onAdd={handleAddProject}/>
   }
   else if(projectsState.selectedPtojectId === undefined) {
    content =<NoProjectSelected onStartAddProject={handleStartAddProject} />
   }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
