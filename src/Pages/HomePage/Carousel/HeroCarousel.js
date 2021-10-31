import React from "react";
import "./HeroCarousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide carousel-fade "
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>The Tour Bees</h4>
                  <p>Tours For Life With The Best Moment you can get</p>
                  <br /> <a href="#services">See Our Services And Book Now</a>
                </div>
                <div className="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://i.ibb.co/cC4ZmqF/2.jpg"
                    className="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
