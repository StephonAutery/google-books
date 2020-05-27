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

    deleteBook = sBook => {
        API.deleteBook(sBook)
            .then(res => {
                this.setState({
                    redirect: "/saved"
                    // books: res.data
                });
            })
            .catch(err => console.log(err));
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
                <div><h3><p>this is a saved book!</p></h3></div>
                <div>
                    {/* <p>{this.props.location.state.id}</p> */}
                    <p>{this.props.location.state.book.title}</p>
                    <p>{this.props.location.state.book.authors}</p>
                    <p><img src={this.props.location.state.book.thumbnail ? this.props.location.state.book.thumbnail : ""} alt="book cover"></img></p>
                    <p><button onClick={() => this.deleteBook(this.props.location.state.id)} className="save btn btn-danger">delete book</button></p><hr />
                    <p>{this.props.location.state.book.synopsis}</p><br/>

                </div>
            </Container>
        )
    }
}