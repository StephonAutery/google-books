import React, { Component } from "react";
import Container from "./container.component";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

export default class Saved extends Component {
    state = {
        name: "",
        books: [],
        bookID: "",
        redirect: null
    };

    getImageLink(link) {
        return (link ? link : "");
    }

    saveBook = sBook => {
        API.saveBook({
            title: sBook.book.title,
            authors: sBook.book.authors.join(", "),
            synopsis: sBook.book.description,
            thumbnail: this.getImageLink(sBook.book.imageLinks.thumbnail),
            infoLink: sBook.infoLink
        })
            .catch(err => console.log(err))
        this.setState({
            redirect: "/saved",
            bookID: sBook.id
        });
    };

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
                        {/* <p>{this.props.location.state.id}</p> */}
                        <p>{this.props.location.state.book.title}</p>
                        <p>{this.props.location.state.book.authors}</p>
                        <p><img src={this.props.location.state.book.imageLinks ? this.props.location.state.book.imageLinks.thumbnail : ""} alt="book cover"></img></p>
                        <p><button onClick={() => this.saveBook(this.props.location.state)} className="save btn btn-success">save me</button></p><hr />
                        <p>{this.props.location.state.book.description}</p>
                    </div>
                </Container>
            )
        }
    }