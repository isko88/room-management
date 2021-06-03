import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "../Rooms/Image";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Image />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
