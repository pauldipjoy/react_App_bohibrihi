import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Book from '../representational/Book.js';





class BookList extends Component {


    
// UNSAFE_componentWillMount(){

//     console.log("BookList componentWillMount!");

//     }


// componentDidMount(){

//     console.log("BookList componentDidMount!");

//     }



    


// UNSAFE_componentWillReceiveProps(nextProps){

//     console.log( "Update Booklist componentWillReceiveProps" , nextProps );

//     }


// shouldComponentUpdate(nextProps , nextState){

//     console.log("Update Booklist shouldComponentUpdate" , nextProps , nextState);

//     return true;


//     }


// UNSAFE_componentWillUpdate(nextProps , nextState){

//     console.log("Update BookList  componentWillUpdate");

//     }


// componentDidUpdate(){

//     console.log("Update BookList componentDidUpdate ");


//     }


    // static getDerivedStateFromProps(nextProps , prevState) {

    //     console.log("BookList getDerivedStateFromProps" , nextProps , prevState);
    //     return prevState;
    // } 


    // getSnapshotBeforeUpdate(){

    //     console.log("U BookList getSnapshotBeforeUpdate ");

    //     // return true;

    // }





    render() {

        // console.log("BookList render!");

        // console.log(this.props);

        return (

            this.props.books.map(( book, index ) => {
        
                return (
        
                <Link to = { "/" + book.id }  key={ book.id }  style = {{ textDecoration : "none" , color : "black"}}  >

                <Book
                    bookName= { book.bookName }
                    writer= { book.writer }
                    // delete={ () =>this.props.deleteBookState(index) }
                
        
                    // inputName= { (event) => this.props.changeWithInputState(event, index)}

                    selectedBookHandler = {() => this.props.selectedBookHandler(book.id)}
                />
                
                
                </Link>
        
                );
        
            })
        
        
        );



    }





}


export default withRouter(BookList);

