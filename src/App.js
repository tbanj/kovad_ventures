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
import AboutUs from './component/about-us/AboutUs';
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
          <Route path="/about_us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/" render={() => <Suspense fallback={
            <div><img src="/cameron_assets/images/resources/preloader.GIF" alt="loader visual" /></div>}> <Home />
          </Suspense>} />
          {/* <Redirect to="/not-found" /> */}
        </Switch>


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
