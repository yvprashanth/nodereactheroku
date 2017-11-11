import React from 'react'
import './App.css'
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import { Route  } from "react-router-dom";


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
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.state.books.filter(book => book.shelf === "currentlyReading").map((book) => 
                                <li key={ book.id }>
                                    <Book title={book.title} authors={book.authors} imgLinks={book.imageLinks.thumbnail} /> 
                                </li>
                            )}
                        </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.state.books.filter(book => book.shelf === "wantToRead").map((book) => 
                                <li key={ book.id }>
                                    <Book title={book.title} authors={book.authors} imgLinks={book.imageLinks.thumbnail} /> 
                                </li>
                            )}
                        </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                          <ol className="books-grid">
                            {this.state.books.filter(book => book.shelf === "read").map((book) => 
                                <li key={ book.id }>
                                    <Book title={book.title} authors={book.authors} imgLinks={book.imageLinks.thumbnail} /> 
                                </li>
                            )}
                        </ol>
                  </div>
                </div>
              </div>
            </div>
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