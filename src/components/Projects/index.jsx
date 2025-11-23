import Card from "../Card";
import projects from "./projectsData";
import "./style.css";

function Projects() {
  return (
    <div className="projects_grid">
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
