import React, { Component } from "react";
import SearchBar from "./search.component";
import Container from "./container.component";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

export default class Books extends Component {
    state = {
        search: "",
        name: "",
        books: [],
        book: [],
        bookID: "",
        redirect: null
    };

    // componenetDidMount() {
    //     this.setState({
    //         redirect: "/search"
    //     })
    // }

    componentDidUpdate() {
        // if (this.state.search === "" && this.state.searching) {
        //     this.setState({
        //         searching: false
        //     });
        // } else if (this.state.searching) {
        //     this.searchBooks(this.state.search);
        // }
    }

    searchBooks(title) {
        API.getGoogleBooks(title)
            .then(res => {
                this.setState({ books: res.data.items });
            })
            .catch(err => {
                console.log("---- Dang! ----");
                console.log(err);
            })
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
        this.searchBooks(this.state.search);
    };

    saveBook = sBook => {
        API.saveBook({
            title: sBook.volumeInfo.title,
            authors: sBook.volumeInfo.authors.join(", "),
            synopsis: sBook.volumeInfo.description,
            thumbnail: sBook.volumeInfo.imageLinks.smallThumbnail,
            infoLink: sBook.volumeInfo.infoLink
        })
            .catch(err => console.log(err))
        this.setState({
            redirect: "/saved",
            bookID: sBook
        });
    };

    viewBook = sBook => {
        API.getGoogleBook(sBook)
            .then(res => {
                let holdBook = res.data.volumeInfo;
                this.setState({
                    redirect: "/view",
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
                <div className="container">
                    <SearchBar
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <ul>
                        {this.state.books.map(book => (
                            <li key={book.id} className="card p-2 m-4 w-50">
                                {book.volumeInfo.title}<hr />
                                {book.volumeInfo.authors}<hr />
                                <img alt="book" width="250" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/250?text=no+image+available"} /><hr />
                                {book.volumeInfo.description}<hr />
                                <div></div>
                                <div></div>
                                <button onClick={() => this.saveBook(book)} className="save btn btn-success">save me</button><hr />
                                <button onClick={() => this.viewBook(book.id)} className="save btn btn-info">view me</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        )
    }
}