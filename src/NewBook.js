import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class NewBook extends Component{
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
        this.makeQuery = this.makeQuery.bind(this)
        this.clearQuery = this.clearQuery.bind(this)
        this.state = {
            results: [],
            myBooks: []
        }

    }

    handleSearch = (query) => {
  query.replace(/\s+/g, '')
     this.makeQuery(query)

    }

    makeQuery(query){

        if(query !== ''){
            console.log('MAKING QUERY')
            BooksAPI.search(query)
            .then(response => {
                console.log(response)
                if(!response.error){
                    this.setState({results: response})
                }else{
                    this.clearQuery()
                }
            }).then(() => this.findMyBooksOnSearch(this.state.results))
        }else{
            console.log('Empty Query')
            this.clearQuery()
        }
    }

    clearQuery = () => {
        this.setState({results:[]})
    }

    findMyBooksOnSearch = (results) =>{
        this.setState(() => {
            results.forEach(book => {
                this.state.myBooks.forEach(myBook =>{
                    if(myBook.id === book.id){
                        book.shelf = myBook.shelf
                    }
                })
            })
            return {results: results}
        })
    }
    componentDidMount(){
        BooksAPI.getAll()
            .then(booksFromAPI => {
            this.setState({myBooks: booksFromAPI})})
    }

    render(){
        const {results} = this.state
        const {onMoveBook,onFindBook} = this.props
        return(

            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text"
                            data-testid="SearchInput"
                            placeholder="Search by title or author"
                            value={this.state.input}
                            name='query'
                            onChange={(event)=>this.handleSearch(event.target.value)}/>

                </div>
            </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                            results.length !== 0 &&(

                                results.map(
                                    (book) => <Book
                                                key={book.id}
                                                book={book}
                                                shelf={book.shelf ? book.shelf : 'none'}
                                                onMoveBook={onMoveBook}
                                                onFindBook={onFindBook}
                                                />
                                )
                            )
                                }
                    </ol>
                </div>
            </div>
        )
    }
}
export default NewBook;