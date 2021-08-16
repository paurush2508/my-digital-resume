import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap" style={{ boxShadow: "2px 2px" }}>
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />

              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
          <p style={{ textAlign: "center", color: "black" }}>
            {projects.title}
          </p>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{color: 'black'}}>Check Out Some of My Works.</h1>
          <div
            className="project-item"           
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
