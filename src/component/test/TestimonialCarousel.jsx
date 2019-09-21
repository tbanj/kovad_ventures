import React, { Component } from 'react'
import Slider from "react-slick";
import './carousel.css';
class TestimonialCarousel extends Component {
    render() {
        var { cards } = this.props
        var settings = {
            dots: true,
            // autoplay: true,
            infinite: true,
            speed: 500,
            lazyload: true,
            slidesToShow: 1, // this should be less than number of array length
            slidesToScroll: 1
        };



        return (
            <div className="container parentaldIV" >
                <Slider {...settings}>

                    {cards.map((item, index) => (
                        <div key={index} className="owl-item cloned" style={{ width: '1170px', marginRight: '0px', backgroundColor: '#FFFFFF' }}><div className="item">
                            <div className="single-testimonials-one">
                                <div className="image-block">
                                    <img src={item.image} className="imgTestimonialCarousel" />
                                </div>
                                <p>{item.content}</p>
                                <h3>{item.title}</h3>
                                <p className="designation">{item.subtitle}</p>
                            </div>
                        </div></div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default TestimonialCarousel;


