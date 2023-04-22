import React, { Component }  from 'react'

class Book extends Component {

    createBook() {
        var book;
        for (let i = 0; i < 14; i+=2) {           
            book += "<div class='double-page'><img src='./book/"+i+".jpg' />"
            book += "<img src='./book/"+(i+1)+".jpg' /></div>"
        }
        return book;
    }
    render() {
        return (
            <div id="book">
                <div dangerouslySetInnerHTML={{__html: this.createBook() }}></div>
            </div>
        )
    }
}

export default Book;
