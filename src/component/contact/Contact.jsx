import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { sendMessage, addVisitorData } from "../../service/dataService.js";
import Form from "../shared/Form.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./contact.css";
import Header from "../template/Header.jsx";
class Contact extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { firstname: "", lastname: "", email: "", message: "" },
      errors: {},
    };

    this._isMounted = false;
  }
  schema = {
    email: Joi.string().email().required().label("Email"),
    firstname: Joi.string().required().min(3).max(20),
    lastname: Joi.string().required().min(3).max(20),
    message: Joi.string().min(10).required(),
  };

  addVisitorContact(data) {
    /* addVisitorData(data).then(data => {
            if (data) {
                this.setState({ data: { firstname: '', lastname: "", email: '', message: '' } });
                toast.success("message sent successfully");
            }
        }, (error) => {
            if (error.response && error.response.status === 422) {
                this.setState({ errorData: 'no data found currently, try again later', serverData: [], isFetching: false });
                toast.error("Unable to send message");
            }
            if (error.response && error.response.status === 400) {
                toast(`We will get in touch shortly ${this.state.data.firstname}`);
                this.setState({ data: { firstname: '', lastname: "", email: '', message: '' } });

            }
        }); */
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const toSend = {
        email: data.email.trim(),
        first_name: data.firstname,
        last_name: data.lastname,
        message: data.message,
      };
      let dataSend = toSend;
      /* sendMessage(toSend).then(data => {
                if (data) {
                    delete dataSend.message;
                    this.addVisitorContact(dataSend);
                }
            }, (error) => {
                if (error.response && error.response.status === 422) {
                    this.setState({ errorData: 'no data found currently, try again later', serverData: [], isFetching: false });
                    toast.error("Unable to send message");
                }
            }); */
      // delete toSend.message;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header currentPath={this.props.history.location.pathname} />
        <section className="page-title-block text-center">
          <div className="container">
            <h2>Contact</h2>
            <div className="thm-breadcrumb">
              <Link to={"/"}>Home</Link>
              <span className="sep">/</span>
              <span className="page-title">Contact</span>
            </div>
            {/* /.thm-breadcrumb */}
          </div>
          {/* /.container */}
        </section>
        {/* /.page-title-block */}
        <section className="contact-info-style-one">
          <div className="container">
            <div className="title-block text-center">
              <span className="tag-line">Contact</span>
              {/* /.tag-line */}
              <h2>Contact Info</h2>
            </div>
            {/* /.title-block */}
            <div className="row high-gutter">
              <div className="col-lg-4">
                <div className="single-contact-info-one text-center">
                  <div className="inner-block">
                    <i className="cameron-icon-placeholder"></i>
                    <h3>Our Location</h3>
                    <p>142 Lawanson Road, Otun-Oba, Itire, Lagos</p>
                  </div>
                  {/* /.inner-block */}
                </div>
                {/* /.single-contact-info-one */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="single-contact-info-one text-center">
                  <div className="inner-block">
                    <i className="cameron-icon-smartphone"></i>
                    <h3>Call Us Now</h3>
                    <a
                      className="infoContact"
                      href="https://wa.me/2347034849938"
                    >
                      <i
                        style={{ fontSize: "1.8em" }}
                        className="fa fa-whatsapp "
                      ></i>{" "}
                      (+234) 703 484 9938
                    </a>
                    <br />
                    <a className="infoContact" href="tel:234-705-069-8626">
                      <i
                        style={{ fontSize: "1.8em" }}
                        className="fa fa-phone "
                      ></i>{" "}
                      (+234) 705 069 8626
                    </a>
                    <br />
                  </div>
                  {/* /.inner-block */}
                </div>
                {/* /.single-contact-info-one */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="single-contact-info-one text-center">
                  <div className="inner-block">
                    <i className="cameron-icon-opened-email-outlined-interface-symbol"></i>
                    <h3>Write Us Now</h3>

                    <a className="infoContact" href="mailto: info@kovad.net">
                      <i
                        style={{ fontSize: "1.8em" }}
                        className="fa fa-envelope "
                      ></i>{" "}
                      info@kovad.net
                    </a>
                    <br />
                    <a
                      className="infoContact"
                      href="mailto: kovad.venture@gmail.com"
                    >
                      <i
                        style={{ fontSize: "1.8em" }}
                        className="fa fa-envelope "
                      ></i>{" "}
                      kovad.venture@gmail.com
                    </a>
                    <br />
                  </div>
                  {/* /.inner-block */}
                </div>
                {/* /.single-contact-info-one */}
              </div>
              {/* /.col-lg-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.contact-info-style-one */}
        <section className="contact-form-wrapper">
          <div className="container">
            <div className="inner-container">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <img
                    className="img-fluid"
                    src={"/cameron_assets/images/resources/map_location.PNG"}
                    alt="map visual"
                  />
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6 d-flex">
                  <div className="contact-form-block my-auto">
                    <div className="title-block">
                      <span className="tag-line">Write Message</span>
                      {/* /.tag-line */}
                      <h2>Get In Touch</h2>
                    </div>
                    {/* /.title-block */}
                    <form
                      onSubmit={this.handleSubmit}
                      className="contact-form-one "
                    >
                      <div className="row">
                        <div className="col-md-6">
                          {this.renderInput(
                            "firstname",
                            "First Name",
                            "text",
                            true
                          )}
                        </div>
                        <div className="col-md-6">
                          {this.renderInput("lastname", "Last Name", "text")}
                        </div>
                      </div>
                      {this.renderInput("email", "Email", "email")}
                      {this.renderTextarea(
                        "message",
                        "Your Inquiry",
                        "Kindly pour out your thoughts",
                        6
                      )}

                      {this.renderButton(
                        "Submit Now",
                        `contact-form-one, btn btn-block btn-lg btn-primary btn-rounded my-3`,
                        "submit",
                        { borderRadius: "60px" },
                        ""
                      )}
                    </form>
                  </div>
                  {/* /.contact-form-block */}
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.inner-container */}
          </div>
          {/* /.container */}
        </section>
        {/* /.contact-form-wrapper */}
      </React.Fragment>
    );
  }
}

export default Contact;
