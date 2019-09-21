import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

import './header.css';





class Header extends Component {
    constructor() {
        super()
        this.state = {
            showMobileNav: false, showNavMobile: '', mobileStyle: 'none',
            ShopMobileStyle: 'none', ShopMobileNav: false, serviceMobileStyle: 'none',
            serviceMobileNav: false, shopProductMobileStyle: 'none', shopProductNav: false,
        }
        this.handleMobileNav = this.handleMobileNav.bind(this);
        this.handleShopMobileStyle = this.handleShopMobileStyle.bind(this);
        // this.handleServiceMobileStyle = this.handleServiceMobileStyle.bind(this)
    }

    handleMobileNav() {
        this.setState(prevState => {
            if (this.state.showMobileNav) {
                this.setState({ showNavMobile: '', mobileStyle: 'none' })
            }
            return { showMobileNav: !prevState.showMobileNav, showNavMobile: 'showen', mobileStyle: 'block' }
        })
    }


    handleShopMobileStyle() {
        this.setState(prevState => {
            if (this.state.ShopMobileNav) {
                this.setState({ ShopMobileStyle: 'none' })
            }
            return { ShopMobileNav: !prevState.ShopMobileNav, ShopMobileStyle: 'block' }
        })
    }

    handleServiceMobileStyle = () => {
        this.setState(prevState => {
            if (this.state.serviceMobileNav) {
                this.setState({ serviceMobileStyle: 'none' })
            }
            return { serviceMobileNav: !prevState.serviceMobileNav, serviceMobileStyle: 'block' }
        })
    }

    handleShopProductMobileStyle = () => {
        this.setState(prevState => {
            if (this.state.shopProductNav) { this.setState({ shopProductMobileStyle: 'none' }) }
            return { shopProductNav: !prevState.shopProductNav, shopProductMobileStyle: 'block' }
        })
    }
    componentDidUpdate(prevProps, prevState) {


    }



    render() {
        const { showMobileNav, mobileStyle, shopProductMobileStyle,
            showNavMobile, ShopMobileStyle, ShopMobileNav, serviceMobileStyle } = this.state;
        const { dataId } = this.props;


        return (
            <React.Fragment>
                <header className="main-header header-style-one" id={dataId}>
                    <div className="top-header">
                        <div className="container">
                            <div className="left-info">
                                <p><i className="cameron-icon-email" ></i><Link style={{ color: 'white', fontWeight: 'bold' }} to="mailto:support@example.com">info@kovad.ng</Link></p>
                            </div>{/* /.left-info */}
                            <div className="right-info">
                                <ul className="info-block">
                                    <li><i className="cameron-icon-support"></i><a href="https://wa.me/2347034849938">(+234) 703 484 9938</a></li>
                                    <li><Link to="cart.html" className="cart-btn"><i className="cameron-icon-shopping-bag"></i><span className="count-text">(0)</span></Link></li>
                                </ul>
                            </div>{/* /.right-info */}
                        </div>{/* /.container */}
                    </div>{/* /.top-header */}
                    <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
                        <div className="container clearfix">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="logo-box clearfix">
                                <Link className="navbar-brand" style={{ backgroundColor: '#ffffff' }} to="index-2.html">
                                    <img src="/cameron_assets/images/resources/d6.png" style={{ width: '100px', height: '89px' }} className="main-logo" alt="Awesome Visaul" />
                                    <img src="/cameron_assets/images/resources/d8.png" className="stricky-logo" alt="Awesome Visaul" />


                                </Link>

                                <button className="menu-toggler" data-target=".header-style-one .main-navigation">
                                    <span onClick={this.handleMobileNav} className="fa fa-bars"></span>
                                </button>
                            </div>{/* /.logo-box */}

                            {/* Collect the nav links, forms, and other content for toggling */}
                            {/* main-navigation */}
                            <div className={`main-navigation ${showNavMobile}`} style={{ display: `${mobileStyle}` }}>
                                <ul className=" navigation-box">

                                    <li className="current">
                                        <NavLink to="/">Home</NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="about.html">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={showMobileNav ? '#' : '/services'} >Services
                                        {showNavMobile ? <button onClick={this.handleServiceMobileStyle} class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span>
                                                <span class="icon-bar"></span> <span class="icon-bar"></span>
                                                <span class="icon-bar"></span> </button> : ''}
                                        </NavLink>
                                        <ul className="sub-menu" style={{ display: `${serviceMobileStyle}` }}>
                                            <li><Link to="private.html">Private Security</Link></li>
                                            <li><Link to="transport.html">Transport Security</Link></li>
                                            <li><Link to="home.html">Home Security</Link></li>
                                            <li className="active"><Link to="busniess.html">Business Security</Link></li>
                                            <li><Link to="protocol.html">Protocol Duties</Link></li>
                                            <li><Link to="armed.html">Armed Security</Link></li>
                                        </ul>{/* /.sub-menu */}
                                    </li>
                                    <li>
                                        <NavLink to="#navphone">Pages</NavLink>
                                        <ul className="sub-menu">
                                            <li><Link to="team.html">Team</Link></li>
                                            <li><Link to="testimonials.html">Testimonials</Link></li>
                                            <li><Link to="pricing.html">Pricing</Link></li>
                                            <li><Link to="gallery.html">Gallery</Link></li>
                                        </ul>{/* /.sub-menu */}
                                    </li>
                                    <li >
                                        <Link to={showMobileNav ? '#' : 'index-2.html'}>Shop
                                        {showNavMobile ? <button onClick={this.handleShopMobileStyle} class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span>
                                                <span class="icon-bar"></span> <span class="icon-bar"></span>
                                                <span class="icon-bar"></span> </button> : ''}
                                        </Link>
                                        <ul className="sub-menu" style={{ display: `${ShopMobileStyle}` }}>
                                            <li><Link to="shop.html">Shop Page</Link></li>
                                            <li><Link to="#navphone">Product Page
                                        {ShopMobileNav ? <button onClick={this.handleShopProductMobileStyle} class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span>
                                                    <span class="icon-bar"></span> <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span> </button> : ''}
                                            </Link>
                                                <ul className="sub-menu" style={{ display: `${shopProductMobileStyle}` }}>
                                                    <li><Link to="index-2.html">Header One</Link></li>
                                                    <li><Link to="index2.html">Header Two</Link></li>
                                                    <li><Link to="index3.html">Header Three</Link></li>
                                                </ul>{/* /.sub-menu */}
                                            </li>
                                            <li><Link to="cart.html">Cart Page</Link></li>
                                            <li><Link to="checkout.html">Checkout Page</Link></li>
                                            <li>
                                                <NavLink to="about.html">About</NavLink>
                                            </li>
                                        </ul>{/* /.sub-menu */}
                                    </li>


                                    <li>
                                        <NavLink to="blog.html">Blog</NavLink>

                                    </li>
                                    <li><div className="sticky-tel">
                                        <a href={"https://wa.me/2347034849938"}>
                                            <i className="cameron-icon-support colorBack"></i>(+234) 703 484 9938</a>
                                    </div></li>
                                </ul>
                            </div>{/* /.navbar-collapse */}

                        </div>
                        {/* /.container */}
                    </nav>
                </header>{/* /.main-header header-style-one */}

            </React.Fragment>
        );
    }
}

export default Header;