import React, { Component } from 'react'
import Slider from "react-slick";

// Import css files
import './carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './carousel.css';
var cards = [
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
        "title": "Burgundy Flemming",
        "subtitle": "Advertising"
    },
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
        "title": "Nigel Nigel",
        "subtitle": "Sound & Vision"
    },
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
        "title": "Caspian Bellevedere",
        "subtitle": "Accounting"
    },
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
        "title": "Burgundy Flemming",
        "subtitle": "Advertising"
    },
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
        "title": "Nigel Nigel",
        "subtitle": "Sound & Vision"
    },
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
        "title": "Caspian Bellevedere",
        "subtitle": "Accounting"
    }
];
class SimpleSlider extends Component {
    render() {
        // let newTemplated;
        var settings = {
            dots: true,
            // autoplay: true,
            infinite: true,
            speed: 500,
            lazyload: true,
            slidesToShow: 3, // this should be less than number of array length
            slidesToScroll: 1
        };



        return (
            <div className="container parentCarousel" >
                <Slider {...settings}>

                    {cards.map((item, index) => (
                        <div key={index}>
                            {/* <Article data={item} /> */}
                            <figure className="snip1584">
                                <img src={item.image} alt="display_carousel" />
                                <figcaption>
                                    <h4>{item.title}</h4>
                                    <h5>{item.subtitle}</h5>
                                </figcaption><a id={`a${index}`} href={`a${index}`} dangerouslySetInnerHTML={{ __html: '' }} />
                            </figure>

                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
export default SimpleSlider;