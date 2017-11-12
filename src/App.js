import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
 
class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount(){
    this.listBookShelf()
  }

  listBookShelf(){
    BooksAPI.getAll().then((books) => {
        this.setState({ 
          books:books,
          currentlyReading: books.filter((book) => book.shelf==='currentlyReading'),
          wantToRead: books.filter((book) => book.shelf==='wantToRead'),
          read: books.filter((book) => book.shelf==='read')
        })
      })
  }

  updateShelf = (book, shelf) => {
    console.log("inside update")
    BooksAPI.update(book, shelf).then((books) => {
      this.listBookShelf()
    })
  }

  render() {
    console.log(this.state.currentlyReading)
    console.log(this.state.wantToRead)
    console.log(this.state.read)
    return (
        <div>
          <Route exact path="/" render={() => (
            <ListBooks currentlyReading={this.state.currentlyReading} 
                wantToRead={this.state.wantToRead} 
                read={this.state.read} 
                onUpdateShelf={this.updateShelf} />
          )}/>

          <Route path="/search" render={({ history }) => (
            <SearchBooks books={this.state.books} onUpdateShelf={this.updateShelf} /> 
          )}/>
        </div>
      
    )
  }
}

export default BooksApp;
