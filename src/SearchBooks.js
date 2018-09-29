import React from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Book from './Book';

class SearchBooks extends React.Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query})
  }

  render() {
    const { listAllBooks, query } = this.state;
    let bookSearchResults = [];

    if(query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      bookSearchResults = listAllBooks.filter((book) => match.test(book.authors) || match.test(book.title))
    }
    bookSearchResults.sort(sortBy('title'));

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
             placeholder="Search by title or author"
             value={query}
             onChange={(event) => this.updateQuery(event.target.value)}
             />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookSearchResults.map((book) => (
              <Book key={book.id} book={book}/>
            ))}
          </ol>
        </div>
      </div>
    )
  };
}

export default SearchBooks;
