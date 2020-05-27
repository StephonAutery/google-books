import axios from "axios";
export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    console.log("------------");
    console.log(id);
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // get the list of books from google
  getGoogleBooks: function (name) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + name);
  },
  // get the list of books from google
  getGoogleBook: function (id) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/" + id)
  }
};
