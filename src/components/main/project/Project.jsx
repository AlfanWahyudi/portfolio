import React from "react";
import "./Project.css";
import githubIcon from '../../../assets/icons/github.svg';
import boxArrowUpIcon from '../../../assets/icons/box-arrow-up-right.svg';

function Project() {
  return (
    <section id="projects">
      <div class="container container__project">
        <h2>Projects</h2>
        <div class="list_projects">
          <article className="card-project">
            <img src="" className="project-img" alt="project img thumbnail" />
            <div className="project-desc">
              <h3 className="project-title">Lorem Title</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text</p>
              <section className="project-actions">
                <button className="btn btn__project">
                  <a href="/">
                    <img src={githubIcon} alt="github icon" />
                    Code
                  </a>
                </button>
                <button className="btn btn__project">
                  <a href="/">
                    <img src={boxArrowUpIcon} alt="box arrow up icon" />  
                    Live Site
                  </a>
                </button>
              </section>
            </div>
            <div></div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Project;
