import React from "react";
import "./Project.css";
import Projects from "../../../data/Project";
import github from '../../../assets/icons/github.svg';
import boxArrowUpWhite from '../../../assets/icons/box-arrow-up-right-white.svg';

function Project() {
  const projects = Projects.reverse().map((project) => {
    return (
      <article className="card-project">
        <img src={project.img} className="project-img" alt="project img thumbnail" />
        <div className="project-desc">
          <h3 className="project-title">{project.title}</h3>
          <p>{project.description}</p>
          <section className="project-actions">
            <button className="btn btn-link btn__project">
              <a href={project.githubUrl} target="__blank" >
                <img src={github} alt="github icon" />
                Code
              </a>
            </button>
            <button className="btn btn-link btn-link__primary btn__project">
              <a href={project.url} target="__blank">
                <img src={boxArrowUpWhite} alt="box arrow up icon" />  
                Live Site
              </a>
            </button>
          </section>
        </div>
      </article>
    );
  });
  
  return (
    <section id="projects">
      <div className="container container__project">
        <h2>Projects</h2>
        <div className="list_projects">
          {projects}
        </div>
      </div>
    </section>
  );
}

export default Project;
