import React, { Component } from 'react';
import Slider from "react-slick";
import data from '../../data/home';
import './carousel.css';


class FieldCarousel extends Component {
    state = {
        sectorItem: []
    }
    componentDidMount() {
        this.setState({ sectorItem: data.sectorItem })
    }

    render() {
        // let newTemplated;
        // const { fieldItem } = this.props;
        const { sectorItem } = this.state
        var settings = {
            dots: false, //d dot below wont show
            autoplay: true, //d images will scroll by itself if its true:: default:false
            infinite: true,
            arrows: false, //this will make the arrows disappear:: default:true
            speed: 500,
            lazyload: true, // default: false ::: will await for the data to arrive
            slidesToShow: 5, // this should be less than number of array length
            slidesToScroll: 1
        };



        return (
            <div className="backgroundDiv"  >
                <div className="container">
                    <Slider {...settings}>

                        {sectorItem.map((item, index) => (
                            <div key={index} className="owl-item cloned" style={{ width: '234px', backgroundcolor: '#57b957', marginRight: '0px' }}><div className="item">
                                <img src={item.image} alt="awesome visual" />
                            </div></div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default FieldCarousel;
