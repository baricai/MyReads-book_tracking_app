import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	state = {
		bookshelf: 'currentlyReading'
	}

	updateBookShelf = (bookshelf) => {

	}

	render() {
		const { books } = this.props

		let bookshelfReading = books.filter((book) => book.shelf === 'currentlyReading')
		let bookshelfWantToRead = books.filter((book) => book.shelf === 'wantToRead')
		let bookshelfRead =  books.filter((book) => book.shelf === 'read')

		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
        				{bookshelfReading.map((book) => (
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
                		  {book.authors.map((author) => (
                		  	<div key={author} className="book-authors">{ author }</div>
                		  	))}
                		  </div>             		
                    	</li>
                    	))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
        				{bookshelfWantToRead.map((book) => (
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
                		  {book.authors.map((author) => (
                		  	<div key={author} className="book-authors">{ author }</div>
                		  	))}
                		  </div>             		
                    	</li>
                    	))}
                    </ol>
                  </div>
                </div>
			      <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
        				{bookshelfRead.map((book) => (
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
                		  {book.authors.map((author) => (
                		  	<div key={author} className="book-authors">{ author }</div>
                		  	))}
                		  </div>             		
                    	</li>
                    	))}
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
}
export default ListBooks