import React from 'react'
import './App.css'
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import Booklist from "./Booklist";


class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

     changeShelf = (newBook, newShelf) => {
          console.log("Inside Change Shelf");
          BooksAPI.update(newBook, newShelf).then(response => {
            newBook.shelf = newShelf;
            // This is one way to get a list of all books that have just been updated
            var updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

            // add book to array and set new state
            updatedBooks.push(newBook);
            this.setState({books:updatedBooks})
          })
        }

    render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Prashanth Yerramilli Book Store</h1>
            </div>
            <Booklist books={this.state.books} changeShelf={this.changeShelf}/>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp