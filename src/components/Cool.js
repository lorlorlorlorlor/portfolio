import React, { Component } from 'react'



class Cool extends Component {

    render() {        
        return (
            <div id="cool">
                <div className="cool-stuff-container">
                    <div className="cool-stuff">
                        {
                            (
                            this.props.cool.inspirations ? 
                                <div className="cool-stuff-content">
                                    <div dangerouslySetInnerHTML={{__html: this.props.cool.inspirations }}></div>
                                </div> :
                                <div></div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Cool;