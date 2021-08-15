import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img
                alt={projects.title}
                src={projectImage}
                style={{ border: "1px solid black", padding: "4px" }}
              />

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
          <p style={{textAlign: "center", color: 'black'}}>{projects.title}</p>
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
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              gridGap: "10px",
            }}
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
