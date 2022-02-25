// import React, { Component } from 'react';
// import './App.css';
// import Book from './components/Book.js';

// // JSX-

// // Functional Component-
// // function App() {

// //   return (

// //     <div className = "App" >

// //       <h1> Hello React JS </h1>

// //       <Person/>

// //     </div>

// //   );

//   // without jsx code using react library method and same output-
// // return React.createElement("div" , { className: "App"}, React.createElement("h1" , null , "Hello React JS") ,  <Person /> );


// //}

// // functional Component-
// // function Person(){

// //   return (

// //   <div>

// //     <h1>Hello! I am person component</h1>

// //   </div>

// //   );


//   // without jsx code using react library method and same output-
//   //return React.createElement("div" , null , React.createElement("h1" , null , "Hello! I am person component"));

// // }


// // ctrl + k + c => comment
// // ctrl + k + u => uncomment

// // class Component-
// class App extends Component {




// //state - define only class based component and that class component property
// //16.8 version have no constructor define thats optional


// state = {

//   books : [

//     { id : 100 ,  bookName : "1984" ,  writer : "George Orwell" },
//     { id : 111 ,  bookName : "The  Da vinci code" , writer : "Dan Brown" },
//     { id : 112 ,  bookName : "The Alchemist" , writer : "Paulo Coelho" },
    

// ],







//   //otherProp : "I am some other property"


// }

// // old version-

// // constructor(){

//    //super();

//    //this.state = {}

// // }






// // onclick button function

// // change state method()-
// // new__Book__Name- dynamic parameter pass in method 
// // change__Book__State = ( new_Book_Name )=> {
//   //console.log("button clicked");

//   // BY usung this method() chnage above the state-

//   // normally in js-
//   // this.state.books[0].bookName= " 1974"  ->  wrong process



//   // setState()- component class build in method
// // this.setState( {

// //   books : [

// //     { bookName : new_Book_Name , writer : "George Orwell" },
// //     { bookName : "The  Da vinci code" , writer :"Dan Brown" },
// //     { bookName : "Metmophosis" , writer : "Franz Kafka" }
    
// //     ] ,

// //     otherProp : "I am some other property__2"


// // } );

// // }
// // onclick  button function end











// // onchange input function-

// change__Input__State = (event ,index) => {


//   const book = {

//     ...this.state.books[index]
//   }

//   book.bookName = event.target.value;
//  const  books = [...this.state.books];

//   books[index] = book;

//   this.setState(
    
//     {
    
//     books: book
  
//   }
    
//     )




// //   this.setState( {

// //     books : [
  
// //       { bookName : event.target.value , writer : "George Orwell" },
// //       { bookName : "The  Da vinci code" , writer :"Dan Brown" },
// //       { bookName : "Metmophosis" , writer : "Franz Kafka" }
      
// //       ] ,
  
// // } );

// // console.log(event)








  
//   }
// // onchange input function end 



// // delete book from dom-
// deleteBookState = index => {

// //const books  = this.state.books.slice();
// //const books = this.state.books.map(item => item);
// const books = [...this.state.books];

// books.splice(index , 1 );
// this.setState({

//   books : books

// });


// };














// render() {



// // Inline CSS
// const style = {

//   border: "1px solid blue",
//   borderRadius: "5px",
//   backgroundColor: "black",
//   color:"white"

// }


//     // let obj = new Component();
//     // console.log(obj);



//     // state & after change state in console test// 
// //console.log(this.state);
// // state & after change state end //




// // Component List start-
// //const bookState = this.state.books; 
// //const addbooks = bookState.map(function(book){

// // mapping()- arrow function
// const addbooks = this.state.books.map( (book , index ) => {

  
// //console.log(book);

// // book  property access-
// //console.log(book.bookName);
// //console.log(book.writer);

// // all component return-
// return (

// <Book

// bookName = {book.bookName}
// writer = {book.writer}

// delete = { () => this.deleteBookState(index)}

// key = {book.id}

// inputName ={ (event) => this.change__Input__State (event,index)}

// />

// );

// });




// //console.log(bookState);

// console.log(addbooks);




// // Component List end






//   return (


// <div className = "App" >


// {/* for person component- */}


//     {/* <h1> Hello person JS </h1>

//     <Person  name = "DIPJOY" age= "22" hometown = "Chittagong"> I am some info of person </Person>
//     <Person  name = "DIPA"   age= "20" hometown = "Dhaka" >  I am some info of person </Person>
//     <Person  name = "JACK"   age= "27" hometown = "sylet" >  I am some info of person</Person>
//     <Person  name = "TANMOY" age= "28" hometown = "Barisal">  I am some info of person</Person> */}



//   {/* for book list component- */}


// <h1 style={style}> Book List</h1>


//  {/* FOR CHANGE STATE- */}

//  {/*  method bind( two parameter) - dynamic parameter pass  */}
// {/* <button onClick={this.change__Book__State.bind(this , "Nineteen Eighty-Four")}> Change State </button> */}

// {/* another better option using arrow function  */}
// {/* <button onClick={ () => this.change__Book__State("Nineteen Eighty-Four")} > Change State </button> */}

// {/* FOR CHANGE STATE end */}



// {/* Using Input field & change State- */}
// <input type ="text"  onChange = {this.change__Input__State} />
// {/* Using input field & change State end */}

 


// {/* <Book

//   bookName = {this.state.books[0].bookName} 
//   writer = {this.state.books[0].writer}

//   inputName = { this.change__Input__State} 
    
// />
    

// <Book 

//   bookName = {this.state.books[1].bookName}
//   writer = {this.state.books[1].writer} />
    


// <Book 

//   bookName = {this.state.books[2].bookName}
//   writer = {this.state.books[2].writer}

    
//     // pass method in props to books component using change state
//   change = {this.change__Book__State.bind(this, "Nineteen 84")} // (change book state fumction reference pass)
  
// />  */}




// {/* component list */}

// {addbooks}

// {/* component list end */}




// </div>

//   );

// }


// }

// export default App;






import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component {

  state = {
    books: [
      { id: 1, bookName: "1984", writer: "George Orwell" },
      { id: 2, bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { id: 3, bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],

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
  
            inputName={ (event) => this.changeWithInputState(event, index)}
  
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

export default App;
