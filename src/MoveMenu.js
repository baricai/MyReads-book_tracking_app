import React from 'react'

const MoveMenu = ({bookInShelf, onHandleChange}) => {
	return (
	          <div className="book-shelf-changer">
	            <select value={bookInShelf.shelf} onChange={(event) => onHandleChange(bookInShelf, event.target.value)}>
	              <option value="none" disabled>Move to...</option>
	              <option value="currentlyReading">Currently Reading</option>
	              <option value="wantToRead">Want to Read</option>
	              <option value="read">Read</option>
	              <option value="none">None</option>
	            </select>
	          </div>  
	)
}

export default MoveMenu