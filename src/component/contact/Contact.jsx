import React from 'react';
import { Link } from "react-router-dom";
import Joi from 'joi-browser';
import { toast } from 'react-toastify';


import Form from '../shared/Form.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sgMail = require('@sendgrid/mail');
class Contact extends Form {
    constructor(props) {
        super(props)
        this.state = {
            data: { firstname: '', lastname: "", email: '', message: '' },
            errors: {}

        };

        this._isMounted = false;

    }
    schema = {
        email: Joi.string().email().required().label("Email"),
        firstname: Joi.string().required().min(3).max(20),
        lastname: Joi.string().required().min(3).max(20),
        message: Joi.string().min(10).required(),
    };

    doSubmit = async () => {


        try {
            const { data } = this.state;
            console.log(data);

            // SENDGRID_API_KEY = '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'
            // sgMail.setApiKey(env.sendgrid_api_key);
            sgMail.setApiKey("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");
            const msg = {
                to: 'engr.temitope@gmail.com',
                from: 'info@kovadltd.com',
                subject: 'Your Inquiry ',

                text: `Hi ${data.firstname},
            Thank you for contacting us!
            Have a pleasant day.`,
                html: `<p>Hi ${data.firstname},
              Thank you for reaching out!
              A customer representative will get back to you soonest</p>`,
            };
            sgMail.send(msg);
            // send message to admin
            const adminMsg = {
                to: 'kovad.ventures@gmail.com',
                from: data.email,
                subject: `You have a new inquiry from ${data.firstname} ${data.lastname} `,

                text: `Hi Admin,
                    Below is the message sent to you by prospecting client`,
                html: `<p>Hi ${data.firstname},
                ${data.message}</p>`,
            };
            sgMail.send(adminMsg);
            toast.success("submitted successfuly")


            // await login(data.username, data.password);

            // toast.success(`Welcome `);

            // below code will reload the application & direct user to url below
            // const { state } = this.props.location;
            // window.location = state ? state.from.pathname : '/dashboard/movies';

            // below will login the user & prevent the user from coming back to this url
            // if the request is successful
            // this.props.history.replace('/movies');
            // console.log(` Login form SUBMITTED`);
        }
        catch (error) {
            console.log(error);

            // this._isMounted = true;
            // if (error.response && error.response.status === 400) {
            //     const errors = { ...this.state.errors };
            //     errors.username = error.response.data;
            //     toast.error(error.response.data);
            //     this._isMounted && this.setState({ errors })

            // }
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="page-title-block text-center">
                    <div className="container">
                        <h2>Contact</h2>
                        <div className="thm-breadcrumb">
                            <Link to={"/"}>Home</Link>
                            <span className="sep">/</span>
                            <span className="page-title">Contact</span>
                        </div>{/* /.thm-breadcrumb */}
                    </div>{/* /.container */}
                </section>{/* /.page-title-block */}
                <section className="contact-info-style-one">
                    <div className="container">
                        <div className="title-block text-center">
                            <span className="tag-line">Contact</span>{/* /.tag-line */}
                            <h2>Contact Info</h2>
                        </div>{/* /.title-block */}
                        <div className="row high-gutter">
                            <div className="col-lg-4">
                                <div className="single-contact-info-one text-center">
                                    <div className="inner-block">
                                        <i className="cameron-icon-placeholder"></i>
                                        <h3>Our Location</h3>
                                        <p>PO Box 16122 Collins Street <br /> West Victoria 8007 Canada</p>
                                    </div>{/* /.inner-block */}
                                </div>{/* /.single-contact-info-one */}
                            </div>{/* /.col-lg-4 */}
                            <div className="col-lg-4">
                                <div className="single-contact-info-one text-center">
                                    <div className="inner-block">
                                        <i className="cameron-icon-smartphone"></i>
                                        <h3>Call Us Now</h3>
                                        <p>(+48) 564-334-21-22-34 <br /> (+48) 564-334-21-25</p>
                                    </div>{/* /.inner-block */}
                                </div>{/* /.single-contact-info-one */}
                            </div>{/* /.col-lg-4 */}
                            <div className="col-lg-4">
                                <div className="single-contact-info-one text-center">
                                    <div className="inner-block">
                                        <i className="cameron-icon-opened-email-outlined-interface-symbol"></i>
                                        <h3>Write Us Now</h3>
                                        <p>info@Cameron.com <br /> info@example.com</p>
                                    </div>{/* /.inner-block */}
                                </div>{/* /.single-contact-info-one */}
                            </div>{/* /.col-lg-4 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </section>{/* /.contact-info-style-one */}
                <section className="contact-form-wrapper">
                    <div className="container">
                        <div className="inner-container">
                            <div className="row no-gutters">
                                <div className="col-lg-6">

                                    <img className="img-fluid" src={"/cameron_assets/images/resources/map_location.PNG"} alt="map visual" />
                                </div>{/* /.col-lg-6 */}
                                <div className="col-lg-6 d-flex">
                                    <div className="contact-form-block my-auto">
                                        <div className="title-block">
                                            <span className="tag-line">Write Message</span>{/* /.tag-line */}
                                            <h2>Get In Touch</h2>
                                        </div>{/* /.title-block */}
                                        <form onSubmit={this.handleSubmit} className="contact-form-one ">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {this.renderInput('firstname', 'Fist Name', 'text', true)}
                                                </div>
                                                <div className="col-md-6">
                                                    {this.renderInput('lastname', 'Last Name', 'text')}
                                                </div>
                                            </div>
                                            {this.renderInput('email', 'Email', 'email')}
                                            {this.renderTextarea('message', 'Your Inquiry', 'Kindly pour out your thoughts', 6)}


                                            {this.renderButton('Submit Now', `contact-form-one, btn btn-block btn-lg btn-primary btn-rounded my-3`, "submit", { borderRadius: '60px' })}
                                        </form>
                                    </div>{/* /.contact-form-block */}
                                </div>{/* /.col-lg-6 */}
                            </div>{/* /.row */}
                        </div>{/* /.inner-container */}
                    </div>{/* /.container */}
                </section>{/* /.contact-form-wrapper */}

            </React.Fragment>
        );
    }
}

export default Contact;