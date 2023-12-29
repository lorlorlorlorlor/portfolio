import React, { Component }  from 'react'
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <div className="nav-element" id="nav-1">
                    <p>
                        <Link to="/">01</Link>
                    </p>
                </div>                
                <div className="nav-element" id="nav-2">
                    <p>
                        <Link to="/book">02</Link>
                    </p>
                </div>
            </div>
        )
    }
}
  
export default Nav;