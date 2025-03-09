import NewProject from "./NewProject";
import { useState } from "react";
import NoProjectSelected from "./NoProjectSelected";
import ProjectsSidebar from "./ProjectsSidebar";
import SelectedProject from "./SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: {}, 
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const projectId = prevState.selectedProjectId;

      return {
        ...prevState,
        tasks: {
          ...prevState.tasks,
          [projectId]: [...(prevState.tasks[projectId] || []), { text, id: taskId }],
        },
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      const projectId = prevState.selectedProjectId;
      return {
        ...prevState,
        tasks: {
          ...prevState.tasks,
          [projectId]: prevState.tasks[projectId].filter((task) => task.id !== taskId),
        },
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
        tasks: { ...prevState.tasks, [projectId]: [] }, 
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );

      const updatedTasks = { ...prevState.tasks };
      delete updatedTasks[prevState.selectedProjectId]; 

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
        tasks: updatedTasks,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks[selectedProject?.id] || []} 
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
