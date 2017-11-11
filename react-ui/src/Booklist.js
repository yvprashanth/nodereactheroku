import React, { Component } from 'react'
import Book from './Book'
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

class Booklist extends Component {
   static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
  render () {
          const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead',  title: 'Want to Read' },
            { type: 'read', title: 'Read'}]

          const { books, changeShelf } = this.props

          return (
                <div className="list-books-content">
                {
                  shelfTypes.map((shelf, index) => {
                  const shelfBooks = this.props.books.filter(book => book.shelf === shelf.type);
                    return (
                      <div key={index}>
                        <div className="bookshelf">   
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                              <Bookshelf books={shelfBooks} changeShelf={ changeShelf } />
                            </div>
                        </div>
                      </div>
                    )
                })
              }
              </div>
            )
      } 
  }

export default Booklist
