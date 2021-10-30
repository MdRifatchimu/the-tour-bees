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
      class="carousel slide carousel-fade "
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <h4>iPhone XS</h4>
                  <p>
                    This has many features that are simply awesome. The phone
                    comes with a 3.50-inch display with a resolution of 320x480
                    pixels.
                  </p>{" "}
                  <br /> <a href="#">BUY NOW</a>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://i.imgur.com/iDwDQ4o.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <h4>HP Pavillion</h4>
                  <p>
                    This has many features that are simply awesome.The phone
                    comes with a 3.50-inch display with a resolution of 320x480
                    pixels.
                  </p>{" "}
                  <br /> <a href="#">BUY NOW</a>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://i.imgur.com/tVBy5Q0.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <a
        class="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        {" "}
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>{" "}
        <span class="sr-only">Previous</span>{" "}
      </a>{" "}
      <a
        class="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        {" "}
        <span class="carousel-control-next-icon" aria-hidden="true"></span>{" "}
        <span class="sr-only">Next</span>{" "}
      </a>
    </div>
  );
};

export default HeroCarousel;
