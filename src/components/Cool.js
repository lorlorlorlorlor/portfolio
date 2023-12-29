import React, { Component } from 'react'



class Cool extends Component {

    render() {        
        return (
            <div id="cool">
                <div className="cool-stuff-container">
                    <div className="cool-stuff">
                        {
                            (
                            this.props.inspirations ? 
                                <div className="cool-stuff-content"><iframe id='video' width='250' height='250'  src='https://www.youtube.com/embed/videoseries?list=PL_fZ_delgA6y22lJS1MBZGJgK5dPg_YCy&controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                                </div> :
                                <div>test</div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Cool;