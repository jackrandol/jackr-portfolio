import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/About" render={() => <About />} />
    </div>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
