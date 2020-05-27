import React from "react";
// import { useStoreContext } from "../utils/GlobalState";


function Card() {
    // const [state, dispatch] = useStoreContext();

    return (

        <div class="card">
            <h1>Title</h1>
            <h4>Short Description</h4>
            <h5>Authors</h5>
            <button>View</button>
            {/* Delete button for saved */}
            <button>Save</button>
            <img></img>
            <div class="card-body">
                This is some text within a card body.
            </div>
        </div>
    );
}

export default CardContainer;




