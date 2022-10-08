import React from "react";
import "../../../App.css";

function Project() {
  const BASE_URL = "https://alfanwahyudi.github.io";

  return (
    <section id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="list_projects">
          <div class="row">
            <div class="card">
              <article class="project">
                <h3 class="title_project">Rock Paper Scissor</h3>
                <p class="description">
                  I'm create simple game rock paper scissor. I only use HTML,
                  CSS, and JavaScript. I hope you love it 😙
                </p>
                <button class="btn btn_project">
                  <a
                    href="https://portfolio-rps.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to App
                  </a>
                </button>
              </article>
            </div>
            <div class="card">
              <article class="project">
                <h3 class="title_project">Twitter Clone</h3>
                <p class="description">
                  It's only one page of home page twitter, only using HTML and
                  CSS. Still have work to do...
                </p>
                <button class="btn btn_project">
                  <a
                    href={`${BASE_URL}/twitter-clone`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Go to App
                  </a>
                </button>
              </article>
            </div>
          </div>
          <div class="row">
            <div class="card">
              <article class="project">
                <h3 class="title_project">Restauroka</h3>
                <p class="description">
                  We make the finding restaurant base on website it will helpul
                  to find restaurant near us
                </p>
                <button class="btn btn_project">
                  <a
                    href={`${BASE_URL}/restauroka`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Go to App
                  </a>
                </button>
              </article>
            </div>
            <div class="card">
              <article class="project">
                <h3 class="title_project">Movie Finder</h3>
                <p class="description">
                  Have movie data from The Movie Database (TMDB) that you can
                  easily find
                </p>
                <button class="btn btn_project">
                  <a
                    href={`${BASE_URL}/movie_finder`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Go to App
                  </a>
                </button>
              </article>
            </div>
          </div>
          <div class="row">
            <div class="card">
              <article class="project">
                <h3 class="title_project">Ask Tech</h3>
                <p class="description">
                  Two main feature for ask about hardware and show tech news
                </p>
                <button class="btn btn_project">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.unikom.asktech"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Go to App
                  </a>
                </button>
              </article>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </section>
  );
}

export default Project;
