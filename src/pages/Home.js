import React, { Component }  from 'react'

import About from '../components/About.js'
import Cool from '../components/Cool.js'
import Portfolio from '../components/Portfolio.js'

class Header extends Component {
  render() {
      return (
        <div id="homepage">
            <About portfolio = { this.props.portfolio } />
            <Portfolio portfolio = { this.props.portfolio } />
            <Cool inspirations = { this.props.portfolio } />
        </div>
      )
  }
}

export default Header;
