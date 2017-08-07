import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}
	state = {
		onUpdated: false
	}
	hangleChange(book, bookshelf) {
		if (this.props.onUpdateBookShelf) {
			this.props.onUpdateBookShelf(book, bookshelf)
			this.setState({onUpdated: true })
		}
	}
	render() {
		const { books } = this.props
		const { onUpdated } = this.state

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
                              <select value={this.state.updateBook} onChange={(event) => this.hangleChange(book, event.target.value)}>
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
                              <select value={this.state.updateBook} onChange={(event) => this.hangleChange(book, event.target.value)}>
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
                              <select value={this.state.updateBook} onChange={(event) => this.hangleChange(book, event.target.value)}>
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
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
	)}
}
export default ListBooks