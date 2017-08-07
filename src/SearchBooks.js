import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

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
      console.log('here')
      this.props.onUpdateBookShelf(book, bookshelf)
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

	render() {
		const { query, searchBooks } = this.state

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
                  <div className="bookshelf-books">
                    <ol className="books-grid">
              		  {searchBooks && searchBooks !== undefined && (searchBooks.map((book) => (
                    	<li key={book.id} className='book-list-item'>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => this.hangleChange(book, event.target.value)}>
                                <option selected="selected" value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>                               
                          </div>    
                		  <div className="book-title">{ book.title }</div>
                		  {book && book.authors !== undefined && (book.authors.map((author) => (
                		  	<div key={author} className="book-authors">{ author }</div>
                		  	)))}
                		  </div>             		
                    	</li>
                      )) )}
                    </ol>
                  </div>
              </ol>
            </div>
          </div>
	    )
	}
}
export default SearchBooks