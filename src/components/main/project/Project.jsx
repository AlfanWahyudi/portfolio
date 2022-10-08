import React from "react";
import "./Project.css";
import Projects from "../../../data/Project";

function Project() {
  const project = Projects.reverse().map((project) => {
    return (
      <div class="card">
        <article class="project">
          <h3 class="title_project">{project.title}</h3>
          <p class="description">{project.description}</p>
          <button class="btn btn_project">
            <a href={project.url} target="_blank" rel="noreferrer">
              Go to App
            </a>
          </button>
        </article>
      </div>
    );
  });
  
  return (
    <section id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="list_projects">
          {project}
        </div>
        <div class="divider"></div>
      </div>
    </section>
  );
}

export default Project;
