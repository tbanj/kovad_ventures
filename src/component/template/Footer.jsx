import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <div className="main-footer">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget about-widget">
                                    <a href="index-2.html" className="footer-logo">
                                        <img src="/cameron_assets/images/resources/footer_d8.png" alt="Awesome Visaul" />
                                    </a>

                                    <div className="social-block">
                                        <a href="https://wa.me/2347034849938"><i className="fa fa-facebook-f"></i></a>
                                        <a className="ml-2" href="https://wa.me/2347034849938"><i className="fa fa-twitter"></i></a>
                                        <a className="ml-2" href="https://wa.me/2347034849938"><i className="fa fa-linkedin"></i></a>
                                    </div>{/* /.social-block */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget links-widget">
                                    <div className="footer-widget-title">
                                        <h3>Services</h3>
                                    </div>
                                    <ul className="links-lists">
                                        <li><Link to={"/"} href="#navphone">Company History</Link></li>
                                        <li><Link to={"/about_us"} href="#navphone">About Us </Link></li>
                                        <li><Link to={"/contact"} href="#navphone">Contact Us</Link></li>
                                        <li><Link to={"/"} href="#navphone">Services</Link></li>
                                        <li><Link to={"/about_us"} href="#nLink to={}vphone">Privacy Policy</Link></li>
                                    </ul>{/* /.links-lists */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget works-widget">
                                    <div className="footer-widget-title">
                                        <h3>Latest Work</h3>
                                    </div>
                                    <div className="gallery-wrapper clearfix">
                                        <div className="single-gallery-item">
                                            <a href="#navphone"><img src="/cameron_assets/images/resources/footer-work-1-1.png" alt="Awesome Visaul" /></a>
                                        </div>
                                        <div className="single-gallery-item">
                                            <a href="#navphone"><img src="/cameron_assets/images/resources/footer-work-1-2.png" alt="Awesome Visaul" /></a>
                                        </div>
                                        <div className="single-gallery-item">
                                            <a href="#navphone"><img src="/cameron_assets/images/resources/footer-work-1-3.png" alt="Awesome Visaul" /></a>
                                        </div>
                                        <div className="single-gallery-item">
                                            <a href="#navphone"><img src="/cameron_assets/images/resources/footer-work-1-4.png" alt="Awesome Visaul" /></a>
                                        </div>
                                        <div className="single-gallery-item">
                                            <a href="#navphone"><img src="/cameron_assets/images/resources/footer-work-1-5.png" alt="Awesome Visaul" /></a>
                                        </div>
                                        <div className="single-gallery-item">
                                            <a href="#navphone"><img src="/cameron_assets/images/resources/footer-work-1-6.png" alt="Awesome Visaul" /></a>
                                        </div>
                                    </div>{/* /.gallery-wrapper */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget ">
                                    <div className="footer-widget-title">
                                        <h3>Subscribe to our NewsLetter</h3>
                                    </div>
                                    {/* <form action="#" className="newsletter-form">
                                        <p>* We promise not to send spam messages..</p>
                                        <input type="text" placeholder="Enter your email" />
                                        <button type="submit">Subscribe</button>
                                    </form> */}
                                    {/* /.newsletter-form */}

                                    <form className="newsletter-form" ngnoform="true" method="POST" action="https://amazonaws.us19.list-manage.com/subscribe/post?u=45d50ff4add87037400543534&amp;id=b1b70fcb53">
                                        {/* <div class=" input-group" style=" margin-top: 3%">
                                            
                                            <input type="email" class="form-control footerInput" placeholder="Input email" name="EMAIL"
                                            aria-label="Email" aria-describedby="basic-addon1" 
                                            ngModel #email ="ngModel" required>
                                            <!-- <i class="fa fa-paper-plane"></i> -->
                                            <button style="background-color: #ee419e;color: #fff; cursor: pointer;" class="fa fa-paper-plane input-group-append" type="submit"></button>  
                                    
                                        </div> */}
                                        <p>* We promise not to send spam messages..</p>
                                        <input type="text" placeholder="Enter your email" name="EMAIL" />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>{/* /.row */}
                    </div>
                </div>
                <div className="bottom-footer text-center">
                    <div className="container">
                        <p><a href="#kovad" id="kovad">Kovad Ventures</a> &copy; 2019 All Right Reserved</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;