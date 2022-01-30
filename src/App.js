import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/homePage/HomePage";
import { ScaledElement } from "./components/scaledElement/ScaledElement";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/scaledElement" component={ScaledElement} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
