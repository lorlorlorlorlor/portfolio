import React, { Component }  from 'react'

class About extends Component {
  render() {
      return (
        <div id="about" className="about-me">
          <div className="main-title-container">
            <marquee behavior="scroll" direction="left" scrollamount="12"><h1>{this.props.portfolio.title}</h1></marquee>
          </div>
        </div>
      )
  }
}

export default About;
