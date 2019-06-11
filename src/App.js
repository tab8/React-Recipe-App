import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./pages/Default";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/*navbar*/}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
