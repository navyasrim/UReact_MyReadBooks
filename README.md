# UReact_MyReadBooks
This project is created while learning React in Udacity .
MyReadBooks  retrieves all the book details from BooksAPI, displays the books in shelf according to the selection like Reading, To Read, Finished Books.
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
      Currently Reading
      Want to Read
      Read
The search page that allows you to find books to add to your library then can show the books in the database by looking for the SEARCH_TERMS
search page that allows you to find books to add to your library.
 You can click on these books to view their data on a new page.

├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root of this app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Didn't write any test cases for now
    └── Book.js #  This is to display Book details like Thumbnail, shelf, title and authors
    └── BookDetails.js # This is to view all the details about particular selected books which displays Thumbnail, description, page Count, categories, title  and authors 
    └── BookShelf.js # This is to arrange the books by shelf
    └── NewBook.js # This is to add new book to the shelf based on  search of the books by terms
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend,(src/BooksAPI.js) contains the methods we will need to perform necessary operations on the backend:
        
        Instructions for the methods are below.
             * [`getAll`](#getall)
            * [`update`](#update)
            * [`search`](#search)
                ### `getAll`
            Method Signature:

            ```js
            getAll()
            ```

            * Returns a Promise which resolves to a JSON object containing a collection of book objects.
            * This collection represents the books currently in the bookshelves in your app.

            ### `update`

            Method Signature:

            ```js
            update(book, shelf)
            ```

            * book: `<Object>` containing at minimum an `id` attribute
            * shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
            * Returns a Promise which resolves to a JSON object containing the response data of the POST request

            ### `search`

            Method Signature:

            ```js
            search(query, maxResults)
            ```

            * query: `<String>`
            
    
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
