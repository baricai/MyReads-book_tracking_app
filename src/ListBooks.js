import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'


class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

  state = {
    bookshelfReading: [],
    bookshelfWantToRead: [],
    bookshelfRead:[]
  }

	render() {
		const { books } = this.props

		this.state.bookshelfReading = books.filter((book) => book.shelf === 'currentlyReading')
		this.state.bookshelfWantToRead = books.filter((book) => book.shelf === 'wantToRead')
		this.state.bookshelfRead =  books.filter((book) => book.shelf === 'read')

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
                      bookshelf={this.state.bookshelfReading}
                      onUpdateBookShelf={this.props.onUpdateBookShelf}
                    />
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <Bookshelf
                      bookshelf={this.state.bookshelfWantToRead}
                      onUpdateBookShelf={this.props.onUpdateBookShelf}
                    />
                  </div>
  			          <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <Bookshelf
                      bookshelf={this.state.bookshelfRead}
                      onUpdateBookShelf={this.props.onUpdateBookShelf}
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