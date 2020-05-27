import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Jumbotron from "./components/jumbotron.component";
import Books from "./components/books.component";
import Saved from "./components/saved.component";
import View from "./components/view.component";
import ViewThumb from "./components/view-thumb.component";

function App() {
  return (
    <div className="container">

      <Jumbotron />
      <Navbar />
      <Router>
        <Switch>
          <Route exact
            path="/"
            render={() => {
              return (
                < Redirect to="/search" />
              )
            }}
          />
          <Route path="/search" component={Books} />
          <Route path="/saved" component={Saved} />
          <Route path="/view" component={View} />
          <Route path="/view-thumb" component={ViewThumb} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;