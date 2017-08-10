import React from 'react'

import MoveMenu from './MoveMenu'

const Bookshelf = ({ booksInBookshelf, onHandleChange })=> {

  return (
            <div className="bookshelf-books">
              <ol className="books-grid">
              {booksInBookshelf !== undefined && booksInBookshelf && booksInBookshelf.map((book) => (
                <li key={book.id} className='book-list-item'>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <MoveMenu
                        bookInShelf={book}
                        onHandleChange={(book, bookshelf) => {
                            onHandleChange(book, bookshelf)
                      }}
                      />                             
                    </div>    
                <div className="book-title">{ book.title }</div>
                {book.authors !== undefined && book.authors && book.authors.map((author) => (
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