import React from 'react';

class Book extends React.Component {

  state = {
    shelf: this.props.book.shelf
  }

  updateShelf = (cat) => {
    this.setState({shelf: cat})
  }


  render() {
console.log(this.props)
    return (
      <li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.shelf} onChange={(event) => this.updateShelf(event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
};

export default Book;