import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'


class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

  handleChange(book, bookshelf) {
    if (this.props.onUpdateBookShelf) {
      this.props.onUpdateBookShelf(book, bookshelf)
    }
  }

	render() {
		const { books } = this.props

		const bookshelfReading = books.filter((book) => book.shelf === 'currentlyReading')
		const bookshelfWantToRead = books.filter((book) => book.shelf === 'wantToRead')
		const bookshelfRead =  books.filter((book) => book.shelf === 'read')

		return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <Bookshelf
                      booksInBookshelf={bookshelfReading}
                      onUpdateBookShelf={this.props.onUpdateBookShelf}
                      onHandleChange={(book, bookshelf) => {
                        this.handleChange(book, bookshelf)
                      }}
                    />
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <Bookshelf
                      booksInBookshelf={bookshelfWantToRead}
                      onUpdateBookShelf={this.props.onUpdateBookShelf}
                      onHandleChange={(book, bookshelf) => {
                        this.handleChange(book, bookshelf)
                      }}
                    />
                  </div>
  			          <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <Bookshelf
                      booksInBookshelf={bookshelfRead}
                      onUpdateBookShelf={this.props.onUpdateBookShelf}
                      onHandleChange={(book, bookshelf) => {
                        this.handleChange(book, bookshelf)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
           </div>
	  )
  }
}

export default ListBooks