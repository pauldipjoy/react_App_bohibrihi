import React from "react";
import '../stylesheets/Book.css';


const Book = (props)=> {

    return (


        <div className="Book"> 
            

         {/* pass method props change state with event    */}
        <h3  onClick ={props.change} >  BOOK: {props.bookName}  </h3>

        <h4> WRITER: {props.writer }</h4>

        <input type = "text" onChange = {props.inputName} value = {props.bookName} />

        </div>
    );





}

export default Book;