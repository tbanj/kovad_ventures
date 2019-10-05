import React, { Component, Suspense, lazy } from 'react';
import { ToastContainer } from "react-toastify";

import { Route, Redirect, Switch } from "react-router-dom";
// import { ResultContext } from './component/shared/result-context.js';
import Footer from './component/template/Footer';
import Contact from './component/contact/Contact';
import './App.css';
import FieldCarousel from './component/test/FieldCarousel';

import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './component/about-us/AboutUs';
import NotFound from './component/not-found/NotFound';
const Home = lazy(() => import("./component/home/Home"));

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { resultName: [] }
  }

  onUserInput = newVal => {
    this.setState({ resultName: newVal });
  };

  componentDidMount() {
    // const currentPath = path.getPath();

    // this.setState({ currentPath })

  }
  render() {
    // const { currentPath } = this.state;

    return (
      <div >
        <ToastContainer />

        <Switch>
          <Route path="/about_us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" render={(props) => <Suspense fallback={
            <div><img src="/cameron_assets/images/resources/preloader.GIF" alt="loader visual" /></div>}> <Home {...props} />
          </Suspense>} />
          <Redirect to="/not-found" />
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
