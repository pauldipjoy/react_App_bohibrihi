import React, { Component } from 'react';


// function Person(){

//     return (
  
// <div>
  
// <h1>Hello! I am person component</h1>
  
// </div>
  
//     );
// }




// (arrow function)
// Dynamic functional component-
 let Person = (props) => {

    console.log(props);

    return(


    <div>
      
    <h1>NUMBER: {Math.random()}</h1>
    <h2> NAME: {props.name} AGE: {props.age}  HOMETOWN: {props.hometown} </h2>
    <h3> INFO: {props.children}</h3>

    </div>

    );
}


// Dynamic class Component (inherit)-
// class Person extends Component {


// // [ constructor function call optional used or not but this keyword call mendatory]

// constructor(props, param) {

//     super(props);

    
// }

// render() {

//    console.log(this.props);
   
// return (

// <div>

//   <h2> NAME: {this.props.name} AGE: {this.props.age}  HOMETOWN: {this.props.hometown} </h2>

//   <h3> INFO: {this.props.children}</h3>

            
// </div>


//         );


//     }

     

// }


export default Person;