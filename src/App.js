import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { routers } from "./components/config/Router";
import { ContactUs } from "./components/contactUs/ContactUs";
import { HomePage } from "./components/homePage/HomePage";
import { ScaledElement } from "./components/scaledElement/ScaledElement";

function App() {
  console.log("Routers", routers);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={routers.home} component={HomePage} />
          <Route
            exact
            path={routers.samples.scaledElement}
            component={ScaledElement}
          />
          <Route
            exact
            path={routers.externals.contactUs}
            component={ContactUs}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
