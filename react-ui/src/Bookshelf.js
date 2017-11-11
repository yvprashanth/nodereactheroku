import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, changeShelf } = this.props
    return (
      <ol className="books-grid">
        {books.map((book) => (
            <li key={book.id}>
                <Book title={book.title} authors={book.authors} 
                imgLinks={book.imageLinks.thumbnail} 
                changeShelf={ changeShelf } theBook = {book} books={books}/>
            </li>
        ))}
      </ol>
    )
  }
}

export default Bookshelf