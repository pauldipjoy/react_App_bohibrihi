import React, { Component } from 'react'
import bookList from '../assets/Bookdata.js'
import Book from './Book.js'

class MainComponent extends Component {

    state = {

    books: bookList, 
        
    showBooks: true
    
    }
    
    
    changeWithInputState = (event, index) => {
    
        const book = {
        ...this.state.books[index]
        }
        console.log(book);
        
        book.bookName = event.target.value;

        const books = [...this.state.books];
        books[index] = book; 
    
        this.setState({ 
    
        books: books
        
        });
    
}
    
    
    
    
    
    deleteBookState = index => {
        //const books = this.state.books.slice();1
        //const books = this.state.books.map(item => item);
        const books = [...this.state.books];
        books.splice( index, 1 );
        this.setState( {
        books : books
    
        });
    };
    
    
    
    // conditional operator
    toggleBooks = () => {
    
        this.setState({
    
        showBooks : ! this.state.showBooks
    
        });
    
    
    }
    
    
    
    
      render() {
        const style = {
          border: "1px solid red",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "white",
        };
    
        //const booksState = this.state.books;
    
        let books = null;

        if(this.state.showBooks){
    
    
        books = this.state.books.map(( book, index  ) => {
          
            return (
              <Book
                bookName= { book.bookName }
                writer= { book.writer }
                delete={ () => this.deleteBookState(index) }
                key={ book.id }
      
                inputName= { (event) => this.changeWithInputState(event, index)}
      
              />
            );
          });
    
    
    
        }
    
       
    
        //console.log(booksState);
        console.log(books);
    
        return (
    
    
          <div className="App">
    
    
            <h1 style={style}>Book List</h1>
    
    
    {/* for conditional operator button */}
          <button onClick={this.toggleBooks}> Toggle Books </button>
    
    
            { books }
            
            {/* Conditional operater use this books */}
            {/* {this.state.showBooks ? books : null } */}
    
    
    
          </div>
        );
      }


 
}



export default  MainComponent;
