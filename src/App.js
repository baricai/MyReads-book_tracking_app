import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBookShelf(book, bookshelf) {
    BooksAPI.update(book, bookshelf).then(() => {
      this.componentDidMount()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.books}
              onUpdateBookShelf={(book, bookshelf) => {
                this.updateBookShelf(book, bookshelf)
              }}
              />
          )}/>

        <Route path='/search' render={({ history }) => (
            <SearchBooks
                books={this.state.books}
                onUpdateBookShelf={(book, bookshelf) => {
                this.updateBookShelf(book, bookshelf)
              }}
              />
          )}
        />
      </div>
    )
  }
}

export default BooksApp