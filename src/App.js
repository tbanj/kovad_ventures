import React, { Component } from 'react';
import { ToastContainer } from "react-toastify";

import { Route, Switch } from "react-router-dom";
// import { ResultContext } from './component/shared/result-context.js';
import Home from './component/home/Home';
import TestParent from './component/test/TestParent.jsx';
import './App.css';
// import SimpleSlider from './component/test/test.jsx';
// import Navbar from './component/template/Navbar.jsx';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultName: []
    }
  }

  onUserInput = newVal => {
    this.setState({ resultName: newVal });
  };
  render() {
    return (
      <div >
        <ToastContainer />
        <Switch>

          {/* <Route path="/not-found" component={NotFound} /> */}
          {/* <Route path="/cart" render={(props) => <FlightSearch user={this.state.resultName} {...props} />} /> */}
          <Route path="/test" component={TestParent} />
          {/* <Route path="/test" component={SimpleSlider} /> */}
          <Route path="/" component={Home} />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
        {/* <ResultContext.Provider value={{ val: this.state.resultName, onUserInput: this.onUserInput }} >
           */}
        {/* <Navbar /> */}

        {/* </ResultContext.Provider> */}
      </div>
    );

  }
}

export default App;
