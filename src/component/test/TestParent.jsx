import React, { Component } from 'react'
import Carousel from './Carousel.jsx';

var cards = [
    {
        "image": "/cameron_assets/images/background/cta-1-1-bg.jpg",
        "title": "Burgundy Flemming",
        "subtitle": "Advertising"
    },
    {
        "image": "/cameron_assets/images/background/testi-bg-1-1.jpg",
        "title": "Nigel Nigel",
        "subtitle": "Sound & Vision"
    },
    {
        "image": "/cameron_assets/images/background/testi-bg-1-1.jpg",
        "title": "Caspian Bellevedere",
        "subtitle": "Accounting"
    },
    {
        "image": "/cameron_assets/images/background/cta-1-1-bg.jpg",
        "title": "Burgundy Flemming",
        "subtitle": "Advertising"
    },
    {
        "image": "/cameron_assets/images/background/testi-bg-1-1.jpg",
        "title": "Nigel Nigel",
        "subtitle": "Sound & Vision"
    },
    {
        "image": "/cameron_assets/images/background/fun-fact-bg-1-1.jpg",
        "title": "Caspian Bellevedere",
        "subtitle": "Accounting"
    }
];

class CarouselParent extends Component {
    state = {}
    render() {
        return (
            <div className=''>

                <Carousel data={cards} />
            </div>
        );
    }
}

export default CarouselParent;