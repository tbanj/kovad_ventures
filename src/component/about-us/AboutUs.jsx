import React, { Component, Suspense } from 'react'
import { Link } from "react-router-dom";
import TestimonialCarousel from '../test/TestimonialCarousel';
import ServiceCarousel from '../test/ServicesCarousel';
import data from '../../data/home.js';
import './aboutus.css';
import Header from '../template/Header';
class AboutUs extends Component {
    state = {
        testimonial_data: [], listService: []
    }

    componentDidMount() {
        this.setState({
            testimonial_data: data.testimonial_data, listService: data.listService
        })

    }
    render() {
        const { testimonial_data, listService } = this.state;
        return (
            <React.Fragment>
                <Header currentPath={this.props.history.location.pathname} />
                <section className="page-title-block text-center">
                    <div className="container">
                        <h2>About Us</h2>
                        <div className="thm-breadcrumb">
                            <a href="index-2.html">Home</a>
                            <span className="sep">/</span>
                            <span className="page-title">About Us</span>
                        </div>{/* /.thm-breadcrumb */}
                    </div>
                </section>{/* /.page-title-block */}
                <section className="about-style-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="video-block-style-one">
                                    <img src="/cameron_assets/images/resources/video-1-1.png" alt="Awesome Visual" />
                                    <Link to={"/"} className="video-button"><i className="fa fa-play"></i></Link>
                                </div>{/* /.video-block-style-one */}
                            </div>{/* /.col-lg-6 */}
                            <div className="col-lg-6 d-flex">
                                <div className="content-block my-auto">
                                    <div className="title-block">
                                        <span className="tag-line">Some Story</span>{/* /.tag-line */}
                                        <h2>Experience</h2>
                                    </div>
                                    <p>Kovad Ventures is a professional installation
                                            company of security & safety device with the ideal
                                            of offering high- end professional solutions through the use of modern
                                            electronics safety devices for Homes, Corporate Organization, Estate, Shopping Malls, Hospitals, Hotels etc.
                                            Also render maintenance services of security and safety devices.
                                        </p>
                                    <a href="#navphone" className="more-btn">Request a Free Quote Now</a>
                                </div>{/* /.content-block */}
                            </div>{/* /.col-lg-6 */}
                        </div>
                    </div>
                </section>{/* /.about-style-two */}
                <section className="mission-style-one wow fadeInUp home-page-two" data-wow-duration="1300ms">
                    <div className="container">
                        <div className="inner-container">
                            <div className="single-mission-one">
                                <div className="count-block">
                                    01
                        </div>{/* /.count-block */}
                                <h3>Our Stories</h3>
                                <p>Retro tattooed tousled, disrupt portland <br /> synth slow-carb brooklyn.</p>
                            </div>{/* /.single-mission-one */}
                            <div className="single-mission-one">
                                <div className="count-block">
                                    02
                        </div>{/* /.count-block */}
                                <h3>Our Mission</h3>
                                <p>Retro tattooed tousled, disrupt portland <br /> synth slow-carb brooklyn.</p>
                            </div>{/* /.single-mission-one */}
                            <div className="single-mission-one">
                                <div className="count-block">
                                    03
                        </div>{/* /.count-block */}
                                <h3>Our Vision</h3>
                                <p>Retro tattooed tousled, disrupt portland <br /> synth slow-carb brooklyn.</p>
                            </div>{/* /.single-mission-one */}
                        </div>{/* /.inner-container */}
                    </div>
                </section>{/* /.mission-style-one */}
                <section className="cta-style-one text-center home-page-two">
                    <div className="container">
                        <div className="title-block">
                            <span className="tag-line">Keep Runing</span>{/* /.tag-line */}
                            <h2>Looking for Certified Trainer</h2>
                        </div>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.</p>
                        <a href="contact.html" className="cta-btn">Get Appointment</a>
                    </div>
                </section>{/* /.cta-style-one */}
                <section className="service-style-one home-page-two">
                    <div className="container">
                        <div className="title-block-style-two text-center ">
                            <span className="tag-line">Services</span>{/* /.tag-line */}
                            <h2>Service We Provide</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.</p>
                        </div>

                        <div className="container-fluid">
                            {/* <ServicesCarousel data={listService} /> */}
                            <Suspense fallback={<div><img src="/cameron_assets/images/resources/preloader.GIF" alt="loader visual" /></div>}>
                                <ServiceCarousel data={listService} />
                            </Suspense>
                        </div>

                    </div>
                </section>{/* /.service-style-one */}
                <section className="testimonials-style-one home-page-two">
                    <div className="container">
                        <div className="title-block text-center">
                            <span className="tag-line">Testimonials</span>{/* /.tag-line */}
                            <h2>What Client Say</h2>
                        </div>

                        <Suspense fallback={<div><img src="/cameron_assets/images/resources/preloader.GIF" alt="loader visual" /></div>}>
                            <TestimonialCarousel cards={testimonial_data} />
                        </Suspense>
                    </div>
                </section>{/* /.testimonials-style-one */}
                <section className="team-style-one">
                    <div className="container">
                        <div className="title-block text-center">
                            <span className="tag-line">Team</span>{/* /.tag-line */}
                            <h2>Meet Our Team</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-team-one text-center  wow fadeInUp" data-wow-duration="1300ms" data-wow-delay="0ms">
                                    <div className="image-block">
                                        <img src="/cameron_assets/images/resources/img_avatar.png" alt="Awesome Visual" />
                                    </div>{/* /.image-block */}
                                    <div className="text-block">
                                        <h3>Alabi Rasheed Abimbola</h3>
                                        <p>CEO</p>
                                        <div className="social-block">
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-facebook-f"></i></a>
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-twitter"></i></a>
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-linkedin"></i></a>
                                        </div>{/* /.social-block */}
                                    </div>{/* /.text-block */}
                                </div>
                            </div>{/* /.col-lg-4 */}
                            <div className="col-lg-4">
                                <div className="single-team-one text-center  wow fadeInUp" data-wow-duration="1300ms" data-wow-delay="500ms">
                                    <div className="image-block">
                                        <img src="/cameron_assets/images/resources/img_avatar.png" alt="Awesome Visual" />
                                    </div>{/* /.image-block */}
                                    <div className="text-block">
                                        <h3>Toheeb Adetunde</h3>
                                        <p>Managing Director</p>
                                        <div className="social-block">
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-facebook-f"></i></a>
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-twitter"></i></a>
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-linkedin"></i></a>
                                        </div>{/* /.social-block */}
                                    </div>{/* /.text-block */}
                                </div>
                            </div>{/* /.col-lg-4 */}
                            <div className="col-lg-4">
                                <div className="single-team-one text-center  wow fadeInUp" data-wow-duration="1300ms" data-wow-delay="1000ms">
                                    <div className="image-block">
                                        <img src="/cameron_assets/images/resources/img_avatar.png" alt="Awesome Visual" />
                                    </div>{/* /.image-block */}
                                    <div className="text-block">
                                        <h3>Alabi Temitope Wahab</h3>
                                        <p>CTO</p>
                                        <div className="social-block">
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-facebook-f"></i></a>
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-twitter"></i></a>
                                            <a href="https://wa.me/2347034849938"><i className="fa fa-linkedin"></i></a>
                                        </div>{/* /.social-block */}
                                    </div>{/* /.text-block */}
                                </div>
                            </div>{/* /.col-lg-4 */}
                        </div>
                    </div>
                </section>{/* /.team-style-one */}

            </React.Fragment>
        );
    }
}

export default AboutUs;