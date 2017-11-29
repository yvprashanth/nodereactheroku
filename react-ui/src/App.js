import React from 'react'
import './App.css'
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import Booklist from "./Booklist";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

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

    backToMain = () => {
      this.setState({showSearchPage : false});
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
        
          <Route path='/' exact render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>Prashanth Yerramilli Book Store</h1>
              </div>
              <Booklist books={this.state.books} changeShelf={this.changeShelf} />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
                {/* <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> */}
              </div>
            </div>
          )} />
          <Route path='/search' exact render={() => (
            <Search showSearchPage={this.backToMain} />
          )} />        
      </div>
    )
  }
}

export default BooksApp