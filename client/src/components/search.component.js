import React from "react";
import Container from "./container.component";

function SearchBar(props) {

    return (
        <Container>
            <form className="form-inline">
                <div>
                    <input
                        type="text"
                        onChange={props.handleInputChange} value={props.value}
                        name="search"
                        className="form-control mb-2 mr-sm-2"
                        id="search"
                        placeholder="enter search term" />
                    <br />
                    <p>
                        <button
                            type="submit"
                            className="btn btn-primary mb-2"
                            onClick={props.handleFormSubmit}>Submit</button>
                    </p>
                </div>
            </form>
        </Container>
    );
}

export default SearchBar;