import React from "react";
import "./HeroCarousel.css";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
  const caro = document.querySelector("#myCarousel");

  return (
    // <div className="container w-75 my-3">
    //   <Carousel
    //     autoPlay
    //     centerMode={true}
    //     useKeyboardArrows={true}
    //     swipeAble={true}
    //     centerSlidePercentage={75}
    //   >
    //     <div>
    //       <img alt="" src="https://i.ibb.co/V2PjSMP/3.jpg" />
    //       <p className="legend ">
    //         Travel With Tour Bees and Enjoy Every Moments
    //       </p>
    //     </div>

    //     <div>
    //       <img
    //         alt=""
    //         src="https://i.ibb.co/cC4ZmqF/2.jpg
    //         "
    //       />
    //       <p className="legend">last camp</p>
    //     </div>
    //     <div>
    //       <img alt="" src="https://i.ibb.co/DWn1Cxx/1.jpg" />
    //       <p className="legend">last camp</p>
    //     </div>
    //     <div>
    //       <img alt="" src="https://i.ibb.co/znbB2M2/4.jpg" />
    //       <p className="legend">last camp</p>
    //     </div>
    //   </Carousel>

    // </div>
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
