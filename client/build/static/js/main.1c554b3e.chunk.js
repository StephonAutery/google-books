(this["webpackJsonpgoogle-books"]=this["webpackJsonpgoogle-books"]||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(29),r=a.n(l),c=(a(36),a(13)),i=a(1);var s=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-4 container"},o.a.createElement("a",{className:"navbar-brand",href:"/search"},"Google Books"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link",href:"/search",onClick:function(){}},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/saved",onClick:function(){}},"Saved")))))};var u=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid p-2 mb-0"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Google Books Search"),o.a.createElement("p",{className:"lead"},"Search for and Save Books of Interest")))},m=a(15),h=a(7),b=a(8),v=a(10),d=a(9);var p=function(e){return o.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var k=function(e){return o.a.createElement(p,null,o.a.createElement("form",{className:"form-inline"},o.a.createElement("div",null,o.a.createElement("input",{type:"text",onChange:e.handleInputChange,value:e.value,name:"search",className:"form-control mb-2 mr-sm-2",id:"search",placeholder:"enter search term"}),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2",onClick:e.handleFormSubmit},"Submit")))))},f=a(12),E=a.n(f),g=function(){return E.a.get("/api/books")},I=function(e){return console.log("------------"),console.log(e),E.a.get("/api/books/"+e)},w=function(e){return E.a.delete("/api/books/"+e)},y=function(e){return E.a.post("/api/books",e)},N=function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},S=function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes/"+e)},j=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={search:"",name:"",books:[],book:[],bookID:"",redirect:null},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(m.a)({searching:!0},n,a))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchBooks(e.state.search)},e.saveBook=function(t){y({title:t.volumeInfo.title,authors:t.volumeInfo.authors.join(", "),synopsis:t.volumeInfo.description,thumbnail:t.volumeInfo.imageLinks.smallThumbnail,infoLink:t.volumeInfo.infoLink}).catch((function(e){return console.log(e)})),e.setState({redirect:"/saved",bookID:t})},e.viewBook=function(t){S(t).then((function(a){var n=a.data.volumeInfo;e.setState({redirect:"/view",bookID:t,book:n})})).catch((function(e){return console.log(e)}))},e}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"searchBooks",value:function(e){var t=this;N(e).then((function(e){t.setState({books:e.data.items})})).catch((function(e){console.log("---- Dang! ----"),console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.redirect?o.a.createElement(i.a,{to:{pathname:this.state.redirect,state:{id:this.state.bookID,book:this.state.book}}}):o.a.createElement(p,null,o.a.createElement("div",{className:"container"},o.a.createElement(k,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement("ul",null,this.state.books.map((function(t){return o.a.createElement("li",{key:t.id,className:"card p-2 m-4 w-50"},t.volumeInfo.title,o.a.createElement("hr",null),t.volumeInfo.authors,o.a.createElement("hr",null),o.a.createElement("img",{alt:"book",width:"250",src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.smallThumbnail:""}),o.a.createElement("hr",null),t.volumeInfo.description,o.a.createElement("hr",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("button",{onClick:function(){return e.saveBook(t)},className:"save btn btn-success"},"save me"),o.a.createElement("hr",null),o.a.createElement("button",{onClick:function(){return e.viewBook(t.id)},className:"save btn btn-info"},"view me"))})))))}}]),a}(n.Component),C=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={name:"",books:[],bookID:"",redirect:null},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(m.a)({searching:!0},n,a))},e.handleFormSubmit=function(e){e.preventDefault(),console.log(e.id)},e.deleteBook=function(t){w(t).then((function(t){e.setState({redirect:"/saved"})})).catch((function(e){return console.log(e)}))},e.viewBook=function(t){I(t).then((function(a){var n=a.data;e.setState({redirect:"/view-thumb",bookID:t,book:n})})).catch((function(e){return console.log(e)}))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){e.setState({books:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.redirect?o.a.createElement(i.a,{to:{pathname:this.state.redirect,state:{id:this.state.bookID,book:this.state.book}}}):o.a.createElement(p,null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement("p",null,"these are your saved books"))),o.a.createElement("ul",null,this.state.books.map((function(t){return o.a.createElement("li",{key:t._id,className:"card p-2 m-4 w-50"},t.title,o.a.createElement("hr",null),t.authors,o.a.createElement("hr",null),o.a.createElement("img",{alt:"book",width:"250",src:t.thumbnail}),o.a.createElement("hr",null),t.synopsis,o.a.createElement("hr",null),o.a.createElement("p",null,o.a.createElement("a",{href:"/search"},"search"),"\xa0|\xa0",o.a.createElement("a",{href:"/saved"},"saved")),o.a.createElement("hr",null),o.a.createElement("button",{onClick:function(){return e.deleteBook(t._id)},className:"save btn btn-danger"},"delete me"),o.a.createElement("hr",null),o.a.createElement("button",{onClick:function(){return e.viewBook(t._id)},className:"save btn btn-info"},"view me"))})))))}}]),a}(n.Component),B=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={name:"",books:[],bookID:"",redirect:null},e.saveBook=function(t){y({title:t.book.title,authors:t.book.authors.join(", "),synopsis:t.book.description,thumbnail:e.getImageLink(t.book.imageLinks.thumbnail),infoLink:t.infoLink}).catch((function(e){return console.log(e)})),e.setState({redirect:"/saved",bookID:t.id})},e}return Object(b.a)(a,[{key:"getImageLink",value:function(e){return e||""}},{key:"render",value:function(){var e=this;return this.state.redirect?o.a.createElement(i.a,{to:{pathname:this.state.redirect,state:{id:this.state.bookID,book:this.state.book}}}):o.a.createElement(p,null,o.a.createElement("div",null,o.a.createElement("p",null,this.props.location.state.book.title),o.a.createElement("p",null,this.props.location.state.book.authors),o.a.createElement("p",null,o.a.createElement("img",{src:this.props.location.state.book.imageLinks?this.props.location.state.book.imageLinks.thumbnail:"",alt:"book cover"})),o.a.createElement("p",null,o.a.createElement("button",{onClick:function(){return e.saveBook(e.props.location.state)},className:"save btn btn-success"},"save me")),o.a.createElement("hr",null),o.a.createElement("p",null,this.props.location.state.book.description)))}}]),a}(n.Component),O=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={name:"",books:[],bookID:"",redirect:null},e.deleteBook=function(t){w(t).then((function(t){e.setState({redirect:"/saved"})})).catch((function(e){return console.log(e)}))},e}return Object(b.a)(a,[{key:"getImageLink",value:function(e){return e||""}},{key:"render",value:function(){var e=this;return this.state.redirect?o.a.createElement(i.a,{to:{pathname:this.state.redirect,state:{id:this.state.bookID,book:this.state.book}}}):o.a.createElement(p,null,o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement("p",null,"this is a saved book!"))),o.a.createElement("div",null,o.a.createElement("p",null,this.props.location.state.book.title),o.a.createElement("p",null,this.props.location.state.book.authors),o.a.createElement("p",null,o.a.createElement("img",{src:this.props.location.state.book.thumbnail?this.props.location.state.book.thumbnail:"",alt:"book cover"})),o.a.createElement("p",null,o.a.createElement("button",{onClick:function(){return e.deleteBook(e.props.location.state.id)},className:"save btn btn-danger"},"delete book")),o.a.createElement("hr",null),o.a.createElement("p",null,this.props.location.state.book.synopsis),o.a.createElement("br",null)))}}]),a}(n.Component);var D=function(){return o.a.createElement("div",{className:"container"},o.a.createElement(u,null),o.a.createElement(s,null),o.a.createElement(c.a,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/",render:function(){return o.a.createElement(i.a,{to:"/search"})}}),o.a.createElement(i.b,{path:"/search",component:j}),o.a.createElement(i.b,{path:"/saved",component:C}),o.a.createElement(i.b,{path:"/view",component:B}),o.a.createElement(i.b,{path:"/view-thumb",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.1c554b3e.chunk.js.map