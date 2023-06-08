import React from "react";
import "./Project.css";
import github from '../../../assets/icons/github.svg';
import boxArrowUpWhite from '../../../assets/icons/box-arrow-up-right-white.svg';
import rpsGameImg from '../../../assets/images/rps-game.png';

function Project() {
  return (
    <section id="projects">
      <div className="container container__project">
        <h2>Projects</h2>
        <div className="list_projects">
          <article className="card-project">
            <img src={rpsGameImg} className="project-img" alt="project img thumbnail" />
            <div className="project-desc">
              <h3 className="project-title">Lorem Title</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text</p>
              <section className="project-actions">
                <button className="btn btn-link btn__project">
                  <a href="/">
                    <img src={github} alt="github icon" />
                    Code
                  </a>
                </button>
                <button className="btn btn-link btn-link__primary btn__project">
                  <a href="/">
                    <img src={boxArrowUpWhite} alt="box arrow up icon" />  
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
