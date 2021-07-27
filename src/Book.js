import React from 'react'

import {Link} from 'react-router-dom'

function Book(props) {
    const {onFindBook,onMoveBook,book,shelf} = props

    const handleChange = (event) => {
        event.preventDefault()
        onMoveBook(book,event.target.value)
    }
    
     const clicked = () => onFindBook(book)
     
        return(
        <li>
                <div className="book">
                    <div className="book-top">
                        <Link to={"/"+book.id}>
                        <div onClick={clicked} className="book-cover"
                            style={book.imageLinks && {  width: 128,
                                        height: 193,
                                        backgroundImage: `url(${book.imageLinks["smallThumbnail"]})` }}>
                                        </div>
                        </Link>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={handleChange} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{                       
                        book.authors ? book.authors.map(author => author + ' '): ''}</div>
                </div>
            </li>
    )
}

export default Book;
