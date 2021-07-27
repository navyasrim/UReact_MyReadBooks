import React from 'react' 
import Book from './Book'

const BookShelf = ({books,shelf,shelfName,onMoveBook, onFindBook}) =>
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map(
                            (book) => <Book
                                        key={book.id}
                                        book={book}
                                        shelf={shelf}
                                        onMoveBook={onMoveBook}
                                        onFindBook={onFindBook}/>)
                    }
                </ol>
            </div>
        </div>
export default BookShelf;