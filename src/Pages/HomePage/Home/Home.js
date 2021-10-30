import React from "react";
import HeroCarousel from "../Carousel/HeroCarousel";
import Counter from "../Counter/Counter";
import Events from "../Events/Events";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroCarousel></HeroCarousel>
      <Services></Services>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Counter></Counter>
      <Events></Events>
    </div>
  );
};

export default Home;
