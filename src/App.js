import React, { Component, Suspense, lazy } from 'react';
import { ToastContainer } from "react-toastify";

import { Route, Switch } from "react-router-dom";
// import { ResultContext } from './component/shared/result-context.js';
// import Home from './component/home/Home';
import Footer from './component/template/Footer';
import Header from './component/template/Header';
// import TestParent from './component/test/TestParent.jsx';
// import SimpleSlider from './component/test/test.jsx';
import './App.css';

// import Navbar from './component/template/Navbar.jsx';
const Home = lazy(() => import("./component/home/Home"));





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
        <Header />
        <Switch>

          {/* <Route path="/not-found" component={NotFound} /> */}
          {/* <Route path="/cart" render={(props) => <FlightSearch user={this.state.resultName} {...props} />} /> */}
          {/* <Route path="/test" component={SimpleSlider} /> */}
          {/* <Route path="/test" component={SimpleSlider} /> */}
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" render={() => <Suspense fallback={
            <div><img src="/cameron_assets/images/resources/preloader.GIF" alt="loader visual" /></div>}> <Home />
          </Suspense>} />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
        {/* <ResultContext.Provider value={{ val: this.state.resultName, onUserInput: this.onUserInput }} >
           */}
        {/* <Navbar /> */}

        {/* </ResultContext.Provider> */}
        <Footer />
      </div>
    );

  }
}

export default App;
