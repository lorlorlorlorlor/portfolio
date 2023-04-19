import React, { Component }  from 'react'

class Portfolio extends Component {
  render() {
    var projects = this.props.portfolio.projects; 
    return (
      <div id="portfolio" className="projects-list-container">
          { 
            (
            projects ? 
              projects.map((project) => (
                <a key={project.title} href={project.link} target="_blank">
                  <div  className="project-details">
                    <div className="project-text">
                      <div className="project-name">  
                        <h3>{project.title}</h3>
                      </div>
                      <div className="project-details">  
                        <h4>{project.description}</h4>
                      </div>
                    </div>
                    <div className="project-link">
                      ↗
                    </div>
                  </div>
                </a>
              )) : 
              <div></div>
            )
          }
      </div>
    )
  }
}

export default Portfolio;
