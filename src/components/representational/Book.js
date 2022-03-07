import React from "react";
import '../../stylesheets/Book.css';


const Book = (props) => {

    // console.log("i am from book");

    return (


        <div className="Book"> 
            

         {/* pass method props change state with event    */}
        {/* <h3  onClick ={props.change} >  BOOK: {props.bookName}  </h3> */}

        <h4  onClick ={props.delete} >  BOOK: {props.bookName}  </h4>

        <h5> WRITER: {props.writer }</h5>

        <input type = "text" onChange = {props.inputName} value = {props.bookName} />

        </div>
    );





}

export default Book;