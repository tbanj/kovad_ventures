import React, { Suspense } from 'react'
import { Link } from "react-router-dom";
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import data from '../../data/home.js';
import { sendQuote, addVisitor } from "../../service/dataService";
import Header from '../template/Header';
import TestimonialCarousel from '../test/TestimonialCarousel';
import ServiceCarousel from '../test/ServicesCarousel';
import Form from '../shared/Form';
import Modal from "../shared/modal/Modal.jsx";
import './aboutus.css';
class AboutUs extends Form {
    constructor(props) {
        super(props);
        this.state = {
            testimonial_data: [], listService: [], errors: {},
            data: { firstname: '', lastname: "", email: '', message: '', phoneNumber: '' },
        }
    }

    schema = {
        email: Joi.string().email().required().label("Email"),
        firstname: Joi.string().required().min(3).max(20).label("First Name"),
        lastname: Joi.string().required().min(3).max(20),
        message: Joi.string().min(10).required(),
        phoneNumber: Joi.number().min(1000000000).max(99999999999999).required().label("Phone"),
    };

    // method to to display and hide modal when mail has been submitted
    displayRequestModal = () => {
        this.setState({ showRequestModal: true, data: { firstname: '', lastname: "", email: '', message: '', phoneNumber: '' } });
    };
    hideRequestModal = () => { this.setState({ showRequestModal: false }); };

    componentDidMount() {
        this.setState({
            testimonial_data: data.testimonial_data, listService: data.listService, showRequestModal: false,
        });
    }

    addVisitorContact(data) {
        addVisitor(data).then(data => {
            if (data) {
                this.setState({ showRequestModal: false });

            }
        }, (error) => {
            if (error.response && error.response.status === 422) {
                this.setState({ errorData: 'no data found currently, try again later', serverData: [], isFetching: false });
                toast.error("Unable to send message");
            }
            if (error.response && error.response.status === 400) {
                this.setState({ showRequestModal: false });
                toast(`We will get back to you shortly ${this.state.data.firstname}`);
            }

        });
    }

    quoteToServer(data) {
        let reviewData = data;
        sendQuote(data).then(data => {
            if (data) {
                toast.success(data.data.message);
                delete reviewData.message;
                this.addVisitorContact(reviewData);
            }
        }, (error) => {
            if (error.response && error.response.status === 422) {
                this.setState({ errorData: 'no data found currently, try again later', serverData: [], isFetching: false });
                toast.error(error.response.data.errors[0]);
            }
        })
    }

    doSubmit = () => {
        try {
            const { data } = this.state;
            let toSend = {
                "email": data.email.trim(), "first_name": data.firstname,
                "last_name": data.lastname, "message": data.message,
                "phone_number": data.phoneNumber.toString()
            }
            toast(`please wait for mail to send!!!`);
            this.quoteToServer(toSend);
        }
        catch (error) {
            console.log(error);
        }
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
                                    <a href="#aboutRequest" onClick={this.displayRequestModal} className="more-btn">Request a Free Quote Now</a>
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
                        <a href="#aboutRequest" onClick={this.displayRequestModal} className="cta-btn">Get Appointment</a>

                        {/* modal request start */}
                        <Modal showRequestModal={this.state.showRequestModal} handleClose={this.hideRequestModal}>
                            <div id="aboutRequest" className="modal-content">
                                <div id="aboutRemoveBorderModal" className="modal-header ">
                                    <h3 className="modal-title col-md-8 offset-md-2" >Request a Quote</h3>
                                    <div className="clearfix">
                                        <span className="float-right">
                                            <button type="button" className="close " data-dismiss="modal">
                                                <span style={{ fontSize: '35px' }} onClick={this.hideRequestModal}>×</span>
                                            </button>
                                        </span>
                                    </div>

                                </div>
                                <div className="modal-body">
                                    <form onSubmit={this.handleSubmit} className="contact-form-one ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                {this.renderInput('firstname', 'First Name', 'text', true)}
                                            </div>
                                            <div className="col-md-6">
                                                {this.renderInput('lastname', 'Last Name', 'text')}
                                            </div>
                                        </div>
                                        {this.renderInput('email', 'Contact Email', 'email')}
                                        {this.renderInput('phoneNumber', 'Phone Number', 'number')}
                                        {this.renderTextarea('message', 'Brief explain of what you want', ' Kindly pour out your thoughts', 6, "w-100 addHeight", "")}
                                        {this.renderButton('Send Now', `btn btn-block btn-lg btn-primary col-md-6 offset-md-3 my-3`, "submit", { borderRadius: '60px' })}

                                    </form>
                                </div>
                            </div>
                        </Modal>
                        {/* modal request end */}
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
                                <ServiceCarousel data={listService} showRequestModal={this.displayRequestModal} />
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
                            <TestimonialCarousel cards={testimonial_data} showRequestModal={this.displayRequestModal} />
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