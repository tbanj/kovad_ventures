import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

class Carousel extends Component {
    state = {}

    render() {
        var data = this.props.data;
        var newsTemplate;
        var settings = {
            lazyload: true,
            autoplay: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>

                        <figure className="snip1584 "><img id="carouselImage" src={item.image} alt="display_carousel" />
                            <figcaption className="mt-5">
                                <div id="addMarginText" className="col-lg-12 text-center mt-5">
                                    <h3 className="banner-title bannerTitleAdditional mt-5" >{item.title}</h3>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod </p> */}
                                    <div className="btn-block ">
                                        <a id="editfont" href="editfornt"  className="mt-5 abutton" style={{ position: 'inherit', fontWeight: 'bold' }}>{item.quote}</a>
                                    </div>
                                </div>
                            </figcaption><a id="a1" href="a1" dangerouslySetInnerHTML={{ __html: '' }}></a>
                        </figure>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>Please add some cards</p>
        }
        return (
            <div className="" style={{ color: 'transparent' }}>
                <div className='news parentaldIV'>
                    <Slider {...settings}>{newsTemplate}</Slider>
                    <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>
                        T
                    </strong>
                </div>
            </div>
        );
    }
}

export default Carousel;