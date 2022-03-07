import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import bookList from '../assets/Bookdata.js';
import BookList from './lists/BookList.js';


class MainComponent extends Component {

  constructor(props){
    super(props);

    this.state = {

      books: bookList
          
      // showBooks: true
      
      }

      // console.log("MainComponent constructor!");
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
    // toggleBooks = () => {
    
    //     this.setState({
    
    //     showBooks : ! this.state.showBooks
    
    //     });
    
    
    // }



// UNSAFE_componentWillMount(){

//       console.log("MainComponent componentWillMount!");
//     }


// componentDidMount(){

//       console.log("MainComponent componentDidMount!");

//     }







// shouldComponentUpdate(nextProps , nextState) {

//     console.log("Update MainComponent shouldComponentUpdate " , nextProps , nextState);

//     return true;

//     }

// UNSAFE_componentWillUpdate(nextProps , nextState){

//   console.log("Update MainComponent componentWillUpdate");

//   }


// componentDidUpdate() {

//   console.log( "Update MainComponent componentDidUpdate" );


//   }



// static getDerivedStateFromProps(nextProps , prevState) {

//   console.log("MainComponent getDerivedStateFromProps" , nextProps , prevState);
//   return prevState;

// } 



// getSnapshotBeforeUpdate(){

// console.log("U MainComponent getSnapshotBeforeUpdate");

//   // return true;

// }




render() {

  // console.log("MainComponent render!");



        // const style = {
        //   border: "1px solid red",
        //   borderRadius: "5px",
        //   backgroundColor: "black",
        //   color: "white",
        // };

    
        //const booksState = this.state.books;

    
        // let books = null;

        // if(this.state.showBooks){
    
    const books  = < BookList 
      
        books = { this.state.books } 

        changeWithInputState = { this.changeWithInputState }
        
        deleteBookState = { this.deleteBookState }
        
    />
    
    
    
    // }
    

    
        //console.log(booksState);
        // console.log(books);

    
    return (

    

<div className="App">


{/* add menu */}

        <div className="nav-bar">

          <ul>

            <li><a href="/">Home</a></li>
            <li><a href="/new-book">New Book</a></li>
          
          </ul>
      
    
      </div>

  







{/* <h1 style={style}>Book List</h1> */}


{/* for conditional operator button */}
  {/* <button onClick={this.toggleBooks}> Toggle Books </button> */}


  {/* { books } */}
      
{/* Conditional operater use this books */}
 {/* {this.state.showBooks ? books : null } */}


 {/* <NewBook /> */}


      <Route  path= "/"  exact 

      render= { () => <h1> Home </h1> } 

      />
      
      <Route  path= "/new-book" exact 

      render= { ()  => <h1> New Book </h1>}
      
      />

  
      

  </div>



    );



}


}

export default  MainComponent;




