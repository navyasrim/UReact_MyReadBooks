import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import NewBook from './NewBook'
import BookShelf from './BookShelf'
import BookDetails from './BookDetails'
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props){
    super(props)
     this.moveBook = this.moveBook.bind(this)
    this.findBook = this.findBook.bind(this)
    this.arrangeBookshelf = this.arrangeBookshelf.bind(this)
  }
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false,
     books:[],
      currentlyReading:[],
      wantToRead:[],
      read:[],
      bookUnit:{}
  }
  arrangeBookshelf(books){
    let currentlyReading = []
    let wantToRead = []
    let read = []

    for (const book of books){
      if(book.shelf === 'currentlyReading'){
        currentlyReading.push(book)
      }
      else if(book.shelf ==='wantToRead'){
        wantToRead.push(book)
      }
      else if(book.shelf === 'read'){
        read.push(book)
      }
    }

    this.setState({
      currentlyReading: currentlyReading,
      wantToRead: wantToRead,
      read:read
    })
  }
  
   componentDidMount(){
    BooksAPI.getAll()
      .then(booksFromAPI => {
        console.log('Libros API',booksFromAPI)
        this.setState({books: booksFromAPI})})
      .then(() =>
        this.arrangeBookshelf(this.state.books))
  }
  
   moveBook(book,target){
    const actualShelf = book.shelf
    book.shelf = target

    this.setState((prevShelf) => {
      if(!actualShelf){

        BooksAPI.update(book,'')
        return {[target]:[...prevShelf[target],book]}

      }else if(target === 'none'){

        BooksAPI.update(book,target)
        return {[actualShelf]: prevShelf[actualShelf].filter( b => b.id !== book.id)}

      }else{

        BooksAPI.update(book,target)
        return {
          [actualShelf]: prevShelf[actualShelf].filter( b => b.id !== book.id),
          [target]: [...prevShelf[target],book]
        }

      }
    })
    BooksAPI.update(book,target)
  }
  
   findBook(book){
    this.setState({bookUnit: book})
  }
  

   render() {

    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1 data-testid="header">MyReads </h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf shelfName="Reading: "
                      shelf="currentlyReading"
                      books={this.state.currentlyReading}
                      onMoveBook={this.moveBook}
                      onFindBook={this.findBook}/>
              <BookShelf shelfName="To Read: "
                      shelf="wantToRead"
                      books={this.state.wantToRead}
                      onMoveBook={this.moveBook}
                      onFindBook={this.findBook}/>
              <BookShelf shelfName="Finished Reading: "
                      shelf="read"
                      books={this.state.read}
                      onMoveBook={this.moveBook}
                      onFindBook={this.findBook}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
        )}/>
        <Route path="/search" render={() => (
          <NewBook onMoveBook={this.moveBook} onFindBook={this.findBook}/>)}/>
        <Route path={"/"+this.state.bookUnit.id} render={() => (
          <BookDetails book={this.state.bookUnit}/> )}/>
      </div>
    )
  }
}

export default BooksApp
