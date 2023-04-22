import React, { Component }  from 'react'
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <div className="nav-element">
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                </div>                
                <div className="nav-element">
                    <p>
                        <Link to="/book">Book</Link>
                    </p>
                </div>
            </div>
        )
    }
}
  
export default Nav;