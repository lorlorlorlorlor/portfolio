import React, { Component }  from 'react'

class Footer extends Component {
  render() {
      return (
        <div id="footer">
          <div className="footer-marquee">
            <marquee behavior="scroll" direction="right" scrollamount="10">
              <p>contact me : {this.props.portfolio.contact}</p>
            </marquee>
          </div>
        </div>
      )
  }
}

export default Footer;
