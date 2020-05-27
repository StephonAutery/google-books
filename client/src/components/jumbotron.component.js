import React from "react";
// import { useStoreContext } from "../utils/GlobalState";



function Jumbotron() {
    // const [state, dispatch] = useStoreContext();

    return (

        <div className="jumbotron jumbotron-fluid p-2 mb-0">
            <div className="container">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead">Search for and Save Books of Interest</p>

            </div>
        </div>
    );
}

export default Jumbotron;
