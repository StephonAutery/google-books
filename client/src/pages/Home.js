import React from "react";
import { Container } from "../components/Grid";
import Navbar from "../components/navbar.component";
import Jumbotron from "../components/jumbotron.component";
import Searchbar from "../components/search.component";
import Books from "../components/books.component.js";
import { useStoreContext } from "../utils/GlobalState";

const Home = () => {
  const [state, dispatch] = useStoreContext();


  return (
    <Container fluid>
        <Navbar />
        <Jumbotron /> 
        {/* Search bar */}
        <Searchbar />
        {/* get some books */}
        <Books />
    </Container>
    

    // Hide and Show
    // Search vs. Saved
  );
};

export default Home;
