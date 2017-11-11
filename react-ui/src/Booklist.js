import React, { Component } from 'react'
import Book from './Book'

class Booklist extends Component {
  render () {
    return (
      <ol className='books-grid'>
        {this.props.books.filter(book => book.shelf === 'wantToRead').map((book) => 
            <li key={book.id}>
                <Book title={book.title} authors={book.authors} imgLinks={book.imageLinks.thumbnail} />
            </li>
         )}
      </ol>
    )
  }
}

export default Booklist
