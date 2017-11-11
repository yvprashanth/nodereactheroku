import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render () {
    const {title, authors, imgLinks, changeShelf, theBook, books} = this.props
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imgLinks}` }}>
          </div>
          <ShelfChanger book={theBook} books={books} changeShelf={changeShelf} />
        </div>
        <div className='book-title'>
          {title}
        </div>
        <div className='book-authors'>
          {this.props.authors.join(', ')}
        </div>
      </div>
    )
  }
}

export default Book
