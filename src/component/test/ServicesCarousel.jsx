import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";

class ServiceCarousel extends Component {
  state = {};

  render() {
    const { showRequestModal } = this.props;
    let data = this.props.data;
    let newsTemplate;
    let settings = {
      lazyload: true,
      autoplay: true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    if (data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return (
          <div key={index}>
            <div className="owl-item parentServiceDiv container-fluid">
              <div className="item">
                <div className="single-service-one">
                  <div className="image-block">
                    <img src={item.image} alt="Awesome Visual" />
                    <div className="overlay-block">
                      <a
                        id="serviceDummy"
                        className="more-link"
                        href="#serviceDummy"
                      >
                        <i className="fa fa-arrows-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-block textContentService">
                    <h3>
                      <a href="services.html">{item.title}</a>
                    </h3>
                    <p>{item.subtitle}</p>

                    <button
                      type="button"
                      id="request"
                      onClick={showRequestModal}
                      className="more-btn"
                    >
                      Request a Free Quote Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {}
          </div>
        );
      });
    } else {
      newsTemplate = <p>Please add some cards</p>;
    }
    return (
      <div className="" style={{ color: "transparent" }}>
        <div className="news parentCarousel">
          <Slider {...settings}>{newsTemplate}</Slider>
          <strong className={"news__count " + (data.length > 0 ? "" : "none")}>
            T
          </strong>
        </div>
      </div>
    );
  }
}

export default ServiceCarousel;
