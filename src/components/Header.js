import React, { Component }  from 'react'
import Nav from './Nav.js'

class Header extends Component {
  render() {
      return (
        <div id="header">
          <Nav />
          <div className="header-marquee">
            <marquee behavior="scroll" direction="left" scrollamount="5">
              <p>{this.props.portfolio.about}</p>
            </marquee>
          </div>
        </div>
      )
  }
}

export default Header;
