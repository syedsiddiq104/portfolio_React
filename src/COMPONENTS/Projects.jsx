import React from "react";
import "../Styles/Projects.css";
import { projectsData } from "../data/Projects_data";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">Works.</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className={`project-card `} key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-links">
              <a href={project.live} target="_blank">View Web</a>
              <a href={project.github} target="_blank">Source Code</a>
            </div>
            <h3 className={"project-title"}>{project.title}</h3>
          </div>
        ))}
      </div>
      <div class="scroll-indicator">
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Projects;
