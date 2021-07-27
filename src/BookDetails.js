import React from 'react'
import {Link} from 'react-router-dom'


function BookDetails(props){
    const book = props.book
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>{book.title}</h1>
          </div>
          <div className="book-description">
            <div className="book-description-cover">
            <div
                style={{    width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks["smallThumbnail"]})` }}></div>
            {book.authors.map(author => author + ' ')}
            </div>
            <div>
                <div>
                    <p>Categories: {book.categories ? book.categories : "No info yet"}</p>
                    <p>Rating: {book.averageRating ? book.averageRating + " of 5" : "No rating yet"}</p>
                    <p>Page Count: {book.pageCount ? book.pageCount + " pages": "No info yet"}</p>
                    <p>Published Date: {book.publishedDate ? book.publishedDate : "No info yet"}</p>
                </div>
                <p>{book.description}</p>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}

export default BookDetails;