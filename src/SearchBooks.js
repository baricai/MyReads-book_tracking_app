import React, { Component } from 'react';

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
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>

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
              		{searchBooks !== undefined && (searchBooks.map((book) => (
                    	<li key={book.id} className='book-list-item'>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>                               
                          </div>    
                		  <div className="book-title">{ book.title }</div>
                		  {book.authors !== undefined && (book.authors.map((author) => (
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