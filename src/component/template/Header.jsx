import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./header.css";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMobileNav: false,
      showNavMobile: "",
      mobileStyle: "none",
      ShopMobileStyle: "none",
      ShopMobileNav: false,
      serviceMobileStyle: "none",
      serviceMobileNav: false,
      shopProductMobileStyle: "none",
      shopProductNav: false,
    };
    this.handleMobileNav = this.handleMobileNav.bind(this);
  }

  handleMobileNav() {
    this.setState((prevState) => {
      if (this.state.showMobileNav) {
        this.setState({ showNavMobile: "", mobileStyle: "none" });
      }
      return {
        showMobileNav: !prevState.showMobileNav,
        showNavMobile: "showen",
        mobileStyle: "block",
      };
    });
  }

  render() {
    const { mobileStyle, showNavMobile } = this.state;
    const { dataId, currentPath } = this.props;

    return (
      <React.Fragment>
        <header className="main-header header-style-one" id={dataId}>
          <div className="top-header">
            <div className="container">
              <div className="left-info">
                <p>
                  <i className="cameron-icon-email"></i>
                  <Link
                    style={{ color: "white", fontWeight: "bold" }}
                    to="mailto:info@kovad.net"
                  >
                    info@kovad.net
                  </Link>
                </p>
              </div>
              {/* /.left-info */}
              <div className="right-info">
                <ul className="info-block mt-3">
                  <li>
                    <i className="cameron-icon-support"></i>
                    <a
                      href="https://wa.me/2347034849938"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (+234) 703 484 9938
                    </a>
                  </li>
                  {/* <li><Link to="cart.html" className="cart-btn"><i className="cameron-icon-shopping-bag"></i><span className="count-text">(0)</span></Link></li> */}
                </ul>
              </div>
              {/* /.right-info */}
            </div>
            {/* /.container */}
          </div>
          {/* /.top-header */}
          <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
            <div className="container clearfix">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="logo-box clearfix">
                <Link
                  className="navbar-brand"
                  style={{ backgroundColor: "#ffffff" }}
                  to="index-2.html"
                >
                  <img
                    src="/cameron_assets/images/resources/d6.png"
                    style={{ width: "100px", height: "89px" }}
                    className="main-logo"
                    alt="Awesome Visaul"
                  />
                  <img
                    src="/cameron_assets/images/resources/d8.png"
                    className="stricky-logo"
                    alt="Awesome Visaul"
                  />
                </Link>

                <button
                  className="menu-toggler"
                  data-target=".header-style-one .main-navigation"
                >
                  <span
                    onClick={this.handleMobileNav}
                    className="fa fa-bars"
                  ></span>
                </button>
              </div>
              {/* /.logo-box */}

              {/* Collect the nav links, forms, and other content for toggling */}
              {/* main-navigation */}
              <div
                className={`main-navigation ${showNavMobile}`}
                style={{ display: `${mobileStyle}` }}
              >
                <ul className=" navigation-box">
                  <li className={currentPath === "/" ? "current" : ""}>
                    {" "}
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className={currentPath === "/contact" ? "current" : ""}>
                    {" "}
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  <li className={currentPath === "/about_us" ? "current" : ""}>
                    {" "}
                    <NavLink to={"/about_us"}>About</NavLink>{" "}
                  </li>
                  <li>
                    <div className="sticky-tel">
                      <a href={"https://wa.me/2347034849938"}>
                        <i className="cameron-icon-support colorBack"></i>(+234)
                        703 484 9938
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
