import React, { Component } from 'react';
import bookList from '../assets/Bookdata.js';
import BookList from './lists/BookList.js';

class MainComponent extends Component {

  constructor(props){
    super(props);

    this.state = {

      books: bookList, 
          
      showBooks: true
      
      }

      console.log("MainComponent constructor!");
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
        books.splice( index, 2 );
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



UNSAFE_componentWillMount(){

      console.log("MainComponent componentWillMount!");
    }


componentDidMount(){

      console.log("MainComponent componentDidMount!");

    }

    


shouldComponentUpdate(nextProps , nextState) {

    console.log("Update MainComponent shouldComponentUpdate " , nextProps , nextState);

    return true;
    
    }


UNSAFE_componentWillUpdate(nextProps , nextState){

  console.log("Update MainComponent componentWillUpdate");

  }


  componentDidUpdate() {

    console.log( "Update MainComponent componentDidUpdate" );


  }



    
    
    
    
    render() {

    console.log("MainComponent render!");



        const style = {
          border: "1px solid red",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "white",
        };
    
        //const booksState = this.state.books;
    
        let books = null;

        if(this.state.showBooks){
    
    
        books = <BookList books = {this.state.books} 

        changeWithInputState = {this.changeWithInputState}
        
        deleteBookState = {this.deleteBookState}
        
    />
    
    
    
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
