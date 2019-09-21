import React, { Component } from 'react';
// import './owl.carousel.css';
import data from '../data/home';
import Carousel from '../test/Carousel';
import ServicesCarousel from '../test/ServicesCarousel';
import TestimonialCarousel from '../test/TestimonialCarousel';
import FieldCarousel from '../test/FieldCarousel';
import Footer from '../template/Footer';
import Header from '../template/Header';

import './home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Home extends Component {
    state = {
        parentContent: [], testimonial_data: [], listService: [], cards: [], sectorItem: [],
        OfferSecurityMore: false, offerBusinessMore: false, offerInformationMore: false,
        offerSupportMore: false,
    }

    handleSecurityMore = () => {
        this.setState(prevState => { return { offerSecurityMore: !prevState.offerSecurityMore } })
    }

    handleBusinessMore = () => {
        this.setState(prevState => { return { offerBusinessMore: !prevState.offerBusinessMore } })
    }

    handleInformationMore = () => {
        this.setState(prevState => { return { offerInformationMore: !prevState.offerInformationMore } })
    }

    handleSupportMore = () => {
        this.setState(prevState => { return { offerSupportMore: !prevState.offerSupportMore } })
    }

    componentDidMount() {
        let serverData = data;
        // console.log("dele: ", er.cards);
        this.setState({
            parentContent: serverData.parentContent, testimonial_data: serverData.testimonial_data,
            listService: serverData.listService, cards: serverData.cards, sectorItem: serverData.sectorItem
        })

    }


    render() {
        const { testimonial_data, parentContent, offerSecurityMore, sectorItem, listService,
            offerSupportMore, offerInformationMore, offerBusinessMore } = this.state;
        return (
            <React.Fragment>
                <div className="page-wrapper">
                    <Header dataId={'header-parent-container'} />
                    {/* /.main-banner-wrapper */}
                    {/* top carousel start */}
                    <div className=''>

                        <Carousel data={parentContent} />
                    </div>
                    {/* top carousel end */}
                    <section className="offer-style-one">
                        <div className="container">
                            <div className="title-block">
                                <span className="tag-line">Offers</span>{/* /.tag-line */}
                                <h2>Our Best Offer</h2>
                            </div>{/* /.title-block */}
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-offer-style-one wow fadeInUp" data-wow-duration="1300ms" data-wow-delay="0ms">
                                        <div className="icon-block">
                                            <i className="cameron-icon-temperature"></i>
                                        </div>{/* /.icon-block */}
                                        {offerSecurityMore ? "" :
                                            <div>
                                                <h3><a href="#home" id="homesecurity">Home <br /> Security</a></h3>
                                                <p>It entails the security hardware install on a property
                                                    as well as personal security who will manage the appliance.
                                                Security hardware includes doors, locks, alarm systems, lighting,
                                                 motion detectors, security camera systems, etc. that are installed
                                                  on a property; personal security involves practices
                                                such as ensuring doors are locked, alarms activated,
                                                 windows closed, extra keys not hidden outside, etc.
                                                </p>
                                            </div>}

                                        {offerSecurityMore ? <p className="moreTextScroll">
                                            Home security help to checkmate nonchallant and abuse act of house
                                            help or house keeper which they unleash on the wards which they are kept
                                            in there custody.
                                            A typical burglary lasts for about 8 to 12 minutes and, on average, a burglar will
                                            break into a home within 60 seconds. Most thefts target cash first followed by jewels,
                                            drugs, and electronics. Common security methods include never hiding extra keys outside,
                                            never turning off all the lights, applying small CCTV stickers on doors, and keeping good tabs with neighbours.
                                        </p> : ""}

                                        <a href="#navphone" onClick={this.handleSecurityMore} className="more-link">{offerSecurityMore ? 'Minimize' : 'Read More'}</a>
                                    </div>{/* /.single-offer-style-one */}
                                </div>{/* /.col-lg-3 */}
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-offer-style-one wow fadeInUp" data-wow-duration="1300ms" data-wow-delay="500ms">
                                        <div className="icon-block">
                                            <i className="cameron-icon-briefcase"></i>
                                        </div>{/* /.icon-block */}
                                        <h3><a href="#navphone">Business <br /> Security</a></h3>
                                        {offerBusinessMore ? "" : <p >It helps to identifies and effectively mitigates or manages, at an early stage,
                                             any developments that may threaten the resilience and continued
                                             survival of a corporation. An effective corporate or enterprise security relays heavily
                                             on state of the art technology gadgets. Below is a detailed reasons why a firm need to install
                                             security systems.</p>}
                                        {offerBusinessMore ? <p className="moreTextScroll">
                                            <strong>10 Reasons Why your Business Need Security Systems</strong><br /><br />
                                            <strong>1. Security systems help protect your business from robbery or theft</strong>

                                            The first reason why your business needs security systems is to keep the burglars at bay. If intruders can see that your establishment has security cameras and alarms, knowing that their faces will be captured on video; they will be discouraged from stealing your goods or equipments.
                                            <br />
                                            <strong>2. It will increase employees’ overall productivity</strong><br />

                                            Installed cameras make the employees aware that they are being watched by their boss. This will prevent them from slacking or sleeping while on duty. They know that video recordings can be played back to show what happened when you the employer is not around.


                                            <br />
                                            <strong>3. It will prevent employee theft</strong><br />

                                            Due to the trust and confidence that the employer gives his employees, the former will not think of the latter stealing from him. Employee theft is really a challenge most business owners or managers face and if not curbed could cost the business a lot of damages. This is another reason why your business needs security systems, as hidden cameras will enable you to catch the real culprit especially if he is one of your people.
                                            <br />
                                            <strong>4. Customers are attracted to your establishment</strong><br />

                                            Having a security system will make your customers feel at ease knowing that you are monitoring the activities in your establishment. They feel safer because surveillance cameras prevent robberies.
                                            <br />
                                            <strong>5. Boosts your corporate reputation</strong><br />

                                            Security systems give the employees, investors, and customers alike the impression that you are a responsible businessman. It also helps you build you a good image. These individuals will see how serious and responsible you are as an owner and employer. That you want to prevent losses in your merchandise and keep thieves from harming your customers and employees.
                                            <br />
                                            <strong>6. Close Circuit TVs and alarms provide added security to your business premises</strong>

                                            Even if you hire a security guard, security cameras help keep track of people constantly walking in and out of your premises. This is important in busy establishments, retail shops or warehouses or because guards alone cannot monitor everything. This is also important for businesses that deal with sensitive information or businesses that needs to protect their intellectual properties.
                                            <br />
                                            <strong>7. Having a security system is a great way to gather evidence</strong><br />

                                            One of the reasons why your business needs security systems is that cameras enable you to document the activities and actual events in your establishment. You can also capture the face of a shop lifter.
                                            <br />
                                            <strong>8. It can greatly help police authorities to catch culprits</strong>

                                            Even if armed robbers successfully steal from you, it will not take long before the authorities catch them. CC TVs make them easily identifiable or give them a lead on who the suspects are. This is why your business need security systems because it helps in the immediate prosecution of offenders.
                                            <br />
                                            <strong>9. It will protect your establishment from unauthorized entry</strong><br />

                                            There are also important documents that you keep and you would not want any unauthorized person from getting a hold of these papers. It could be contract notes, sensitive information, etc.
                                            <br />
                                            <strong>10. Security systems reduce property insurance</strong><br />

                                            Insurance companies reduce the amount of premiums once you have a security system, since a decreased risk of loss in your property would result to reduced premiums for your policy.

                                            As a final note, I want you to know that security is a personal duty. It is not reserved for the government security agencies alone. In fact, you are 99% percent responsible for your own security because no one can passionately safeguard your life and properties like you. So increase your security awareness today, it will pay in the long run.

</p> : ""}
                                        <a href="#navphone" onClick={this.handleBusinessMore} className="more-link">{offerBusinessMore ? 'Minimize' : 'Read More'}</a>
                                    </div>{/* /.single-offer-style-one */}
                                </div>{/* /.col-lg-3 */}
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-offer-style-one wow fadeInUp" data-wow-duration="1300ms" data-wow-delay="1000ms">
                                        <div className="icon-block">
                                            <i className="cameron-icon-safe-box"></i>
                                        </div>{/* /.icon-block */}
                                        <h3><a href="#navphone">Information <br /> Security</a></h3>
                                        {offerInformationMore ? "" :
                                            <p>The state of being protected against the unauthorized use of information,
                                                 especially electronic data, or the measures taken to achieve this.
                                                 Industrial infrastructures are increasingly connected, getting smarter and more efficient in the process.
                                                  Along with these gains comes the need to protect infrastructure assets from cyber attacks.
                                            </p>
                                        }
                                        {offerInformationMore ? <p className="moreTextScroll">
                                            We have security experts who can help you to test your organization architecture to ascertain
                                            i. Whether you are already been hacked.<br />
                                            ii. Your system is vulnerable to be attack soon.<br />
                                            Best practices when it comes to protecting critical infrastructure from cyber attacks-: <br />
                                            a. Long term approach which entails embarking on asolid cyber-security plan that is implemented as a continuous
                                         process and relies on fact-based verifications  and provide the resources to make it happen.<br />
                                            b. Short tem approach:  Is by focusing on remote access, walk-in laptops, USB sticks and the communication of files (anything from technical documents to executables) via email. Surprisingly, many asset owners don’t maintain a full
                                             and accurate list of contractors along with their roles and responsibilities. Others don’t control remote access tightly.
                                          </p> : ""}
                                        <a href="#navphone" onClick={this.handleInformationMore} className="more-link">{offerInformationMore ? 'Minimize' : 'Read More'}</a>
                                    </div>{/* /.single-offer-style-one */}
                                </div>{/* /.col-lg-3 */}
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-offer-style-one wow fadeInUp" data-wow-duration="1300ms" data-wow-delay="1500ms">
                                        <div className="icon-block">
                                            <i className="cameron-icon-support"></i>
                                        </div>{/* /.icon-block */}
                                        <h3><a href="#navphone">Useful <br /> Support</a></h3>
                                        {offerSupportMore ? "" : <p>Get in touch with our support personnels through online chat box at the left
                                            corner of this page or make use of number Below<br />
                                            <a href="https://wa.me/2347034849938"><i style={{ fontSize: '1.8em' }} className="fa fa-whatsapp " ></i> (+234) 703 484 9938</a><br />
                                            <a href="tel:234-705-069-8626"><i style={{ fontSize: '1.8em' }} className="fa fa-phone " ></i> (+234) 705 069 8626</a>
                                        </p>
                                        }

                                    </div>{/* /.single-offer-style-one */}
                                </div>{/* /.col-lg-3 */}
                            </div>{/* /.row */}
                        </div>{/* /.container */}
                    </section>{/* /.offer-style-one */}
                    <section className="about-style-one">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 d-flex">
                                    <div className="content-block my-auto">
                                        <div className="title-block">
                                            <span className="tag-line">Some Story</span>{/* /.tag-line */}
                                            <h2>Years Of Experience</h2>
                                        </div>{/* /.title-block */}
                                        <p>Kovad Ventures is a professional installation
                                            company of security & safety device with the ideal
                                            of offering high- end professional solutions through the use of modern
                                            electronics safety devices for Homes, Corporate Organization, Estate, Shopping Malls, Hospitals, Hotels etc.
                                            Also render maintenance services of security and safety devices.
                                        </p>

                                        <a href="#navphone" className="more-btn">Request a Free Quote Now</a>
                                    </div>{/* /.content-block */}
                                </div>{/* /.col-lg-6 */}
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src="/cameron_assets/images/resources/story-1-1.png" alt="Awesome Visaul" />
                                    </div>{/* /.image-block */}
                                </div>{/* /.col-lg-6 */}
                            </div>{/* /.row */}
                        </div>{/* /.container */}
                    </section>{/* /.about-style-one */}
                    <section className="mission-style-one wow fadeInUp" data-wow-duration="1300ms">
                        <div className="container">
                            <div className="row inner-container">
                                <div className="col-md-4 single-mission-one">
                                    <div className="count-block">
                                        01
                    </div>{/* /.count-block */}
                                    <h3>Our Stories</h3>
                                    <p>Kovad Ventures  is a professional installation<br />
                                        company of security & safety device with the ideal<br />
                                        of offering high- end professional solutions with routine maintenance of the equipments to perform optimumly always</p>
                                </div>{/* /.single-mission-one */}
                                <div className="col-md-4  single-mission-one">
                                    <div className="count-block">
                                        02
                    </div>{/* /.count-block */}
                                    <h3>Our Mission</h3>
                                    <p>Provide high-quality, and affordable CCTV solutions and achieve complete customer satisfaction.</p>
                                </div>{/* /.single-mission-one */}
                                <div className="col-md-4  single-mission-one">
                                    <div className="count-block">
                                        03
                    </div>{/* /.count-block */}
                                    <h3>Our Vision</h3>
                                    <p>To be renowned as a world class installation safety solution choice in Nigeria through our service.
                                         Professionalism and integrity reached through innovative and cost effective security devices and equipments.</p>
                                </div>{/* /.single-mission-one */}
                            </div>{/* /.inner-container */}
                        </div>{/* /.container */}
                    </section>{/* /.mission-style-one */}
                    <section className="cta-style-one text-center">
                        <div className="container">
                            <div className="title-block">
                                <span className="tag-line">Keep Runing</span>{/* /.tag-line */}
                                <h2>Looking for Certified Security Expert</h2>
                            </div>{/* /.title-block */}
                            <a href="contact.html" className="cta-btn">Request a Free Quote Now</a>
                        </div>{/* /.container */}
                    </section>{/* /.cta-style-one */}
                    <section className="service-style-one">
                        <div className="container">
                            <div className="upper-block">
                                <div className="title-block">
                                    <span className="tag-line">Services</span>{/* /.tag-line */}
                                    <h2>Service We Provide</h2>
                                </div>{/* /.title-block */}
                                {/* <div className="carousel-btn-block service-carousel-btn">
                                <span className="carousel-btn left-btn"><i className="cameron-icon-left-arrow"></i></span>
                                <span className="carousel-btn right-btn"><i className="cameron-icon-right-arrow"></i></span>
                            </div> */}
                            </div>{/* /.upper-block */}
                            {/* insert carousel for servicees start */}
                            <div className="container-fluid">
                                <ServicesCarousel data={listService} />
                            </div>
                            {/* insert carousel for servicees end */}


                        </div>{/* /.container */}
                    </section>{/* /.service-style-one */}
                    <section className="fun-fact-style-one">
                        <div className="container">
                            <div className="fun-fact-block-wrapper">
                                <div className="single-fun-fact-one">
                                    <div className="icon-block">
                                        <i className="cameron-icon-locked"></i>
                                    </div>{/* /.icon-block */}
                                    <div className="text-block">
                                        <h3 className="counter">642</h3>
                                        <p>Lock Installed</p>
                                    </div>{/* /.text-block */}
                                </div>{/* /.single-fun-fact-one */}
                                <div className="single-fun-fact-one">
                                    <div className="icon-block">
                                        <i className="cameron-icon-smile"></i>
                                    </div>{/* /.icon-block */}
                                    <div className="text-block">
                                        <h3 className="counter">26</h3>
                                        <p>Happy Customers</p>
                                    </div>{/* /.text-block */}
                                </div>{/* /.single-fun-fact-one */}

                                <div className="single-fun-fact-one">
                                    <div className="icon-block">
                                        <i className="cameron-icon-key"></i>
                                    </div>{/* /.icon-block */}
                                    <div className="text-block">
                                        <h3 className="counter">431</h3>
                                        <p>Premises Secured</p>
                                    </div>{/* /.text-block */}
                                </div>{/* /.single-fun-fact-one */}
                            </div>{/* /.fun-fact-block-wrapper */}
                        </div>{/* /.container */}
                    </section>{/* /.fun-fact-style-one */}
                    <section className="featured-style-one">
                        <div className="container">
                            <div className="row no-gutters wow fadeInUp" data-wow-duration="1300ms">
                                <div className="col-lg-6 d-flex block-wrapper">
                                    <div className="content-block my-auto">
                                        <div className="title-block">
                                            <span className="tag-line">Love</span>{/* /.tag-line */}
                                            <h2>Why Our Client Trust Us?</h2>
                                        </div>{/* /.title-block */}
                                        <div className="signle-featured-one">
                                            <div className="icon-block">
                                                <div className="inner-block">
                                                    <i className="cameron-icon-user"></i>{/* /.cameron-icon-star */}
                                                </div>{/* /.inner-block */}
                                            </div>{/* /.icon-block */}
                                            <div className="text-block">
                                                <h3>Professionalism</h3>
                                                <p>We deliver world class service which is higher than revenue which our aim
                                                    is to abolish the saying that only elite can have access to quality security equipments
                                                </p>
                                            </div>{/* /.text-block */}
                                        </div>{/* /.signle-featured-one */}
                                        <div className="signle-featured-one">
                                            <div className="icon-block">
                                                <div className="inner-block">
                                                    <i className="cameron-icon-star"></i>{/* /.cameron-icon-star */}
                                                </div>{/* /.inner-block */}
                                            </div>{/* /.icon-block */}
                                            <div className="text-block">
                                                <h3>Always Honest</h3>
                                                <p>We dont over charge.</p>
                                            </div>{/* /.text-block */}
                                        </div>{/* /.signle-featured-one */}
                                        <div className="signle-featured-one">
                                            <div className="icon-block">
                                                <div className="inner-block">
                                                    <i className="cameron-icon-support"></i>{/* /.cameron-icon-star */}
                                                </div>{/* /.inner-block */}
                                            </div>{/* /.icon-block */}
                                            <div className="text-block">
                                                <h3>Customers Support</h3>
                                                <p>Our customer support is available on
                                                    <br /> <strong>Monday to Saturday from 8am- 6pm</strong></p>
                                            </div>{/* /.text-block */}
                                        </div>{/* /.signle-featured-one */}
                                    </div>{/* /.content-block */}
                                </div>{/* /.col-lg-6 */}
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src="/cameron_assets/images/resources/featured-1-1.jpg" alt="Awesome Visaul" />
                                    </div>{/* /.image-block */}
                                </div>{/* /.col-lg-6 */}
                            </div>{/* /.row no-gutters */}
                        </div>{/* /.container */}
                    </section>{/* /.featured-style-one */}
                    <section className="testimonials-style-one">
                        <div className="container">
                            <div className="title-block text-center">
                                <span className="tag-line">Testimonials</span>{/* /.tag-line */}
                                <h2>What Client Say</h2>
                            </div>{/* /.title-block */}
                            <TestimonialCarousel cards={testimonial_data} />
                        </div>{/* /.container */}
                    </section>{/* /.testimonials-style-one */}

                    <section className="brands-area-one">
                        <div className="container">
                            <FieldCarousel fieldItem={sectorItem} />
                        </div>{/* /.container */}
                    </section>{/* /.brands-area-one */}

                    <Footer />
                    {/* /.site-footer */}
                </div>
            </React.Fragment>


        );
    }
}

export default Home;