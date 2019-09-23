import React, { Component, Suspense, lazy } from 'react';
import { ToastContainer } from "react-toastify";

import { Route, Switch } from "react-router-dom";
// import { ResultContext } from './component/shared/result-context.js';
import Footer from './component/template/Footer';
import Header from './component/template/Header';
import Contact from './component/contact/Contact';
import './App.css';
import FieldCarousel from './component/test/FieldCarousel';

import 'react-toastify/dist/ReactToastify.css';
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
          <Route path="/contact" component={Contact} />
          <Route path="/" render={() => <Suspense fallback={
            <div><img src="/cameron_assets/images/resources/preloader.GIF" alt="loader visual" /></div>}> <Home />
          </Suspense>} />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
        {/* <ResultContext.Provider value={{ val: this.state.resultName, onUserInput: this.onUserInput }} >
           */}
        {/* <Navbar /> */}

        {/* </ResultContext.Provider> */}
        <Suspense fallback={<div><img src="/cameron_assets/images/resources/preloader.GIF" alt="loader visual" /></div>}>
          <FieldCarousel />
        </Suspense>
        <Footer />
      </div>
    );

  }
}

export default App;
