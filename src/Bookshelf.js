import React, { Component } from 'react'

const Bookshelf = ({ booksInBookshelf, onHandleChange })=> {
  return (
            <div className="bookshelf-books">
              <ol className="books-grid">
              {booksInBookshelf.map((book) => (
                <li key={book.id} className='book-list-item'>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(event) => onHandleChange(book, event.target.value)}>
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
    )
}

export default Bookshelf