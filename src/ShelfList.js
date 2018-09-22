import React from 'react';
import Book from './Book';

class ShelfList extends React.Component {

  render() {
    const book = this.state;
    return (
      <ol className="books-grid">
        {this.props.listAllBooks.map((book) => (
          <Book book={book} key={book.id}/>
        ))}
      </ol>
    )
  }
};

export default ShelfList;
