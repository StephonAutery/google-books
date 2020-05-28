import React, { Component } from "react";
import API from "../utils/API";
import Container from "./container.component";
import { Redirect } from "react-router-dom";

export default class Saved extends Component {
    state = {
        name: "",
        books: [],
        bookID: "",
        redirect: null
    };

    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            searching: true,
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.id);
    };

    deleteBook = sBook => {
        console.log(sBook);
        API.deleteBook(sBook)
            .catch(err => console.log(err));
        this.setState({
            redirect: "/saved",
            bookID: sBook
        });
    }

    viewBook = sBook => {
        // console.log(sBook);
        API.getBook(sBook)
            .then(res => {
                let holdBook = res.data;
                this.setState({
                    redirect: "/view-thumb",
                    bookID: sBook,
                    book: holdBook
                });
            })
            .catch(err => console.log(err))
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: this.state.bookID,
                    book: this.state.book
                }
            }} />
        }
        return (
            <Container>
                <div>
                    <div><h3><p>these are your saved books</p></h3></div>
                    <ul >
                        {this.state.books.map(book => (
                            <li key={book._id} className="card p-2 m-4 w-50">
                                {book.title}<hr />
                                {book.authors}<hr />
                                <img alt="book" width="250" src={book.thumbnail} /><hr />
                                {book.synopsis}<hr />
                                <p><a href="/search">search</a>&nbsp;|&nbsp;<a href="/saved">saved</a></p><hr />
                                <button onClick={() => this.deleteBook(book._id)} className="save btn btn-danger">delete me</button><hr />
                                <button onClick={() => this.viewBook(book._id)} className="save btn btn-info">view me</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        )
    }
}