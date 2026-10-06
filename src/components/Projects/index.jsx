import Card from "../Card";
import projects from "./projectsData";
import "./style.css";


function Projects() {
  return (
    <section id="Projects">
      <h2 className="projects_title">Réalisations</h2>
    <div className="projects_grid">
     {projects.filter(project => project.featured && project.link).map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
    </section>
  );
}

export default Projects;
