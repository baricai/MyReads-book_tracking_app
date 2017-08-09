import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

	state = {
		query: '',
    searchBooks: []
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
		this.searchingBooks(query)			
	}

  hangleChange(book, bookshelf) {
    if (this.props.onUpdateBookShelf) {
      this.props.onUpdateBookShelf(book, bookshelf)

      //for updating move function, return new search 
      let newSearchBooks = this.state.searchBooks
      for (let i = 0; i < this.state.searchBooks.length; i++) {
        if (this.state.searchBooks[i] === book) {
          newSearchBooks.splice(i, 1)
          this.setState({searchBooks: newSearchBooks})
        }
      }
    }
  }

  searchingBooks = (query) => {
    if (query) {
	     BooksAPI.search(query).then(searchBooks => {
	      this.setState({searchBooks: searchBooks})
	     })
    } else {
	     this.setState({searchBooks: []})      	
    }
  }

  isAddedBook(searchBook, books) {
    //function for checking if it is added book or not
    for (let i = 0; i < books.length; i++) {
      if (searchBook.id === books[i].id) {
        return false
      }
    }
    return true
  }

	render() {
		const { query, searchBooks } = this.state
    const { books } = this.props

    let searchBooksWithoutAdded = []
    if (searchBooks !== undefined && searchBooks && typeof searchBooks.filter === 'function') {
      searchBooksWithoutAdded = searchBooks.filter((searchBook) => this.isAddedBook(searchBook, books))      
    }

		return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                	className='search-books'
                	type="text" 
                	placeholder="Search by title or author"
                	value={query}
                	onChange={(event) => this.updateQuery(event.target.value)}
                	/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">              
                <Bookshelf
                  booksInBookshelf={searchBooksWithoutAdded}
                  onUpdateBookShelf={this.props.onUpdateBookShelf}
                  onHandleChange={(book, bookshelf) => {
                    this.hangleChange(book, bookshelf)
                  }}
                />
              </ol>
            </div>
          </div>
	    )
	}
}

export default SearchBooks