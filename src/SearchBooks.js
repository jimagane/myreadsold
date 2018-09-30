import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBooks extends React.Component {

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
             placeholder="Search by title or author"
             value={this.props.query}
             onChange={(event) => this.props.onUpdateQuery(event.target.value)}
             />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.bookSearchResults.map((book) => (
              <Book key={book.id} book={book} onUpdateBook={this.props.onUpdateBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
};

export default SearchBooks;
