import React, { Component } from 'react';
import { Route } from "react-router-dom";

import About from "./About";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path = "/" component = {Dashboard}/>
        <Route exact path = "/about" component = {About}/>
      </div>
    );
  }
}

export default App;