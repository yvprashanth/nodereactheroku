import React, { Component } from 'react'
import {Link } from 'react-router-dom'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {value : ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = even => {
    this.setState({value : even.target.value});
    console.log(even.target.value);
  }

  render () {
    const { showSearchPage } = this.props;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type='text' placeholder='Search by Title or Author' onChange={this.handleChange} value={this.state.value} />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'></ol>
        </div>
      </div>
    )
  }
}

export default Search
