# Employee Directory

[<img src="https://img.shields.io/badge/Stephon_Autery-let's_begin_here_...-goldenrod.svg" target="_blank">](http://stephonautery.com) [<img src="https://img.shields.io/badge/license-MIT-blue.svg">](https://opensource.org/licenses/MIT) [<img src="https://img.shields.io/badge/_ES_-_6_-green.svg">](http://www.ecma-international.org/ecma-262/6.0/) [<img src=https://img.shields.io/badge/_path_-_7.1.0_-green.svg>](https://www.npmjs.com/package/path) [<img src=https://img.shields.io/badge/_express_-_4.16.4-pink.svg>](https://www.npmjs.com/package/fs-extra) [<img src=https://img.shields.io/badge/_MongoDB_-4.2.6_-orange.svg>](https://www.mongodb.com/company) [<img src=https://img.shields.io/badge/_JSON-RFC_8259_-brown.svg>](https://www.npmjs.com/package/console.table) [<img src=https://img.shields.io/badge/React-v16.13.1_-blue.svg>](https://www.npmjs.com/package/console.table) [<img src=https://img.shields.io/badge/Node-v12.16.3_-darkgreen.svg>](https://www.npmjs.com/package/console.table)


this is a MongoDB/React/Express/Node.js Google Books search app. to build this app, I create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. I also use Node, Express and MongoDB so that users can save books to review or purchase later.

## site picture
![Site](./client/public/images/google-books-image.png)



## code Snippet
This is a REACT application. Below is a code snippet that retrieves a list of books using the Google Books API servers.

```javaScript

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

```
## dependencies
MongoDB\
Express\
React\
Node.js

### [Google Books on GitHub](https://github.com/StephonAutery/google-books)

### [Google Books deployed App](#)

## contributors
- Stephon Autery

## Stephon Autery
![StephonAutery](./client/public/images/stephon-headshot-garden.jpg)

[Stephon Autery on GitHub](https://github.com/StephonAutery)

[Stephon Autery on LinkedIn](https://www.linkedin.com/in/stephon-a-1bb575198/)