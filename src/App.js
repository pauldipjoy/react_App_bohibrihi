import React, { Component } from 'react';
import './App.css';
import Book from './components/Book.js';

// JSX-

// Functional Component-
// function App() {

//   return (

//     <div className = "App" >

//       <h1> Hello React JS </h1>

//       <Person/>

//     </div>

//   );

  // without jsx code using react library method and same output-
// return React.createElement("div" , { className: "App"}, React.createElement("h1" , null , "Hello React JS") ,  <Person /> );


//}

// functional Component-
// function Person(){

//   return (

//   <div>

//     <h1>Hello! I am person component</h1>

//   </div>

//   );


  // without jsx code using react library method and same output-
  //return React.createElement("div" , null , React.createElement("h1" , null , "Hello! I am person component"));

// }


// ctrl + k + c => comment
// ctrl + k + u => uncomment

// class Component-
class App extends Component {




//state - define only class based component and that class component property
//16.8 version have no constructor define thats optional


state = {

  books : [

    { bookName : "1984" ,  writer : "George Orwell" },
    { bookName : "The  Da vinci code" , writer : "Dan Brown" },
    { bookName : "The Alchemist" , writer : "Paulo Coelho" }

],

  otherProp : "I am some other property"


}

// old version-

// constructor(){

   //super();

   //this.state = {}

// }




// onclick button function

// change state method()-
// new__Book__Name- dynamic parameter pass in method 
change__Button__State = ( new_Book_Name )=> {
  //console.log("button clicked");

  // BY usung this method() chnage above the state-

  // normally in js-
  // this.state.books[0].bookName= " 1974"  ->  wrong process



  // setState()- component class build in method
this.setState( {

  books : [

    { bookName : new_Book_Name , writer : "George Orwell" },
    { bookName : "The  Da vinci code" , writer :"Dan Brown" },
    { bookName : "Metmophosis" , writer : "Franz Kafka" }
    
    ] ,

    otherProp : "I am some other property__2"


} );

}
// onclick  button function end



// onchange input function-

change__Input__State = event => {

  this.setState( {

    books : [
  
      { bookName : event.target.value , writer : "George Orwell" },
      { bookName : "The  Da vinci code" , writer :"Dan Brown" },
      { bookName : "Metmophosis" , writer : "Franz Kafka" }
      
      ] ,
  
} );
  
  }
// onchange input function end 



render() {



// Inline CSS
const style = {

  border: "1px solid blue",
  borderRadius: "5px",
  backgroundColor: "black",
  color:"white"

}


    // let obj = new Component();
    // console.log(obj);



    // state & after change state in console test// 
//console.log(this.state);
// state & after change state end //


// Component List-
const bookState = this.state.books;

const addbooks = bookState.map( book => {

//console.log(book);
//console.log(book.bookName);
//console.log(book.writer);

return (

<Book

bookName = {book.bookName}
writer = {book.writer}
/>

);

});


//console.log(bookState);

console.log(addbooks);







  return (


<div className = "App" >


{/* for person component- */}


    {/* <h1> Hello person JS </h1>

    <Person  name = "DIPJOY" age= "22" hometown = "Chittagong"> I am some info of person </Person>
    <Person  name = "DIPA"   age= "20" hometown = "Dhaka" >  I am some info of person </Person>
    <Person  name = "JACK"   age= "27" hometown = "sylet" >  I am some info of person</Person>
    <Person  name = "TANMOY" age= "28" hometown = "Barisal">  I am some info of person</Person> */}



  {/* for book list component- */}


<h1 style={style}> Book List</h1>


 {/* FOR CHANGE STATE- */}

 {/*  method bind( two parameter) - dynamic parameter pass  */}
<button onClick={this.change__Button__State.bind(this , "Nineteen Eighty-Four")}> Change State</button>

{/* another better option using arrow function  */}
{/* <button onClick={ () => this.change__Book__State("Nineteen Eighty-Four")} > Change State </button> */}

{/* FOR CHANGE STATE end */}



{/* Using Input field & change State- */}
<input type ="text"  onChange = {this.change__Input__State} />
{/* Using input field & change State end */}





 {/* <Book

  bookName = {this.state.books[0].bookName} 
  writer = {this.state.books[0].writer}

  inputName = { this.change__Input__State} 
    
/>
    

<Book 

  bookName = {this.state.books[1].bookName}
  writer = {this.state.books[1].writer} />
    


<Book 

  bookName = {this.state.books[2].bookName}
  writer = {this.state.books[2].writer}

    
    // pass method in props to books component using change state
  change = {this.change__Button__State.bind(this, "Nineteen 84")} // (change book state fumction reference pass)
  
/>  */}

{addbooks}

</div>

  );

}

}


export default App;
