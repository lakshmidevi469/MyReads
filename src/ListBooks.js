import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI.js'
//import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

	/*state={
		currentlyReading: [],
		wantToRead: [],
		read: []
	}

	componentDidMount() {
	    this.setState({
	      	currentlyReading: this.props.books.filter((book) => book.shelf==='currentlyReading'),
	      	wantToRead: this.props.books.filter((book) => book.shelf==='wantToRead'),
	    	read: this.props.books.filter((book) => book.shelf==='read')
	      }
	    )
	}

	listBookShelf(){
		BooksAPI.getAll().then((books) => {
	    	
	      this.setState({
	      	allBooks: books,
	      	currentlyReading: books.filter((book) => book.shelf==='currentlyReading'),
	      	wantToRead: books.filter((book) => book.shelf==='wantToRead'),
	    	read: books.filter((book) => book.shelf==='read')
	      }
	    )})
	}

	updateShelf = (book, shelf) => {
			
		BooksAPI.update(book, shelf).then((books) => {
			this.listBookShelf()
		})
	}

	closeSearchPage = () => {
	    this.setState({showSearchPage: false})
	}

	goSearchPage = () => {
	    this.setState({showSearchPage: true})
	}*/

	render(){
		console.log("inside listbooks.js")
	  return(
	  		<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Currently Reading</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                   
	                      {this.props.currentlyReading.map(book=>
		              	   	<li key={book.id}>
		                        <div className="book">
		                          <div className="book-top">
		                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
		                            <div className="book-shelf-changer">
		                              <select onChange={(event)=>this.props.onUpdateShelf(book, event.target.value)}>
		                                <option value="none" disabled>Move to...</option>
		                                <option value="currentlyReading">Currently Reading</option>
		                                <option value="wantToRead">Want to Read</option>
		                                <option value="read">Read</option>
		                                <option value="none">None</option>
		                              </select>
		                            </div>
		                          </div>
		                          <div className="book-title">{book.title}</div>
		                          <div className="book-authors">{book.authors}</div>
		                        </div>
		                    </li>
		                  )}
	                    </ol>
	                  </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Want to Read</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      {this.props.wantToRead.map(book=>
		              	   	<li key={book.id}>
		                        <div className="book">
		                          <div className="book-top">
		                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
		                            <div className="book-shelf-changer">
		                              <select onChange={(event)=>this.props.onUpdateShelf(book, event.target.value)}>
		                                <option value="none" disabled>Move to...</option>
		                                <option value="currentlyReading">Currently Reading</option>
		                                <option value="wantToRead" selected>Want to Read</option>
		                                <option value="read">Read</option>
		                                <option value="none">None</option>
		                              </select>
		                            </div>
		                          </div>
		                          <div className="book-title">{book.title}</div>
		                          <div className="book-authors">{book.authors}</div>
		                        </div>
		                    </li>
		                  )}
	                    </ol>
	                  </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Read</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      {this.props.read.map(book=>
		              	   	<li key={book.id}>
		                        <div className="book">
		                          <div className="book-top">
		                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
		                            <div className="book-shelf-changer">
		                              <select onChange={(event)=>this.props.onUpdateShelf(book, event.target.value)}>
		                                <option value="none" disabled>Move to...</option>
		                                <option value="currentlyReading">Currently Reading</option>
		                                <option value="wantToRead">Want to Read</option>
		                                <option value="read" selected>Read</option>
		                                <option value="none">None</option>
		                              </select>
		                            </div>
		                          </div>
		                          <div className="book-title">{book.title}</div>
		                          <div className="book-authors">{book.authors}</div>
		                        </div>
		                    </li>
		                  )}
	                    </ol>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="open-search">
	            	<Link to="/search" >Add a book</Link>
	            </div>
            </div>
		)
	}
}

export default ListBooks;
