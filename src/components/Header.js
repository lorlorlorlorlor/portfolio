import React, { Component }  from 'react'

class Header extends Component {
  render() {
      return (
        <div id="header">
          <div className="header-marquee">
            <marquee behavior="scroll" direction="left" scrollamount="10">
              <p>{this.props.portfolio.about}</p>
            </marquee>
          </div>
        </div>
      )
  }
}

export default Header;
