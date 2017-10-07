import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI.js'
import StringRegExp from 'escape-string-regexp'


class SearchBooks extends Component {

	state = {
		books: [],
		searchText: ''
	}

	componentDidMount() {
	    BooksAPI.getAll().then((books) => {
	    	console.log(books)
	      this.setState({ books }) 
	    })
	  }

	updateSearchText=(text)=>{
	  this.setState({searchText: text.trim()})
	}

	render() {

		let showingBooks
        if(this.state.searchText){
            const match = new RegExp(StringRegExp(this.state.searchText), 'i')
            showingBooks = this.state.books.filter((book) => match.test(book.title))
        }
        else{
            showingBooks = this.state.books
        }

		return(
			<div className="search-books">
				<div className="search-books-bar">
	              <a className="close-search" onClick={()=>this.props.onCloseClick()}>Close</a>
	              <div className="search-books-input-wrapper">
	                {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	                */}
	                <input type="text" placeholder="Search by title or author"
	                	value={this.state.searchText}
	                	onChange={(event)=>this.updateSearchText(event.target.value)}
	                />

	              </div>
	              
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{showingBooks.map(book=>
	              	   	<li key={book.id}>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
	                            <div className="book-shelf-changer">
	                              <select>
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
	            {JSON.stringify(this.state.books.length)}
            </div>
		)
	}
}

export default SearchBooks;