import React from "react";
// import { useStoreContext } from "../utils/GlobalState";
import { Container } from "./grid.component";
import Card from "./card.component";



function CardContainer() {
    // const [state, dispatch] = useStoreContext();

    return (

       <Container>
           <h1>Results</h1>
           {/* Saved Books */}
           <Card />
       </Container>
    );
}

export default CardContainer;
