import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <h2 className="text-center text-success my-5"> See Our Photo Gallery</h2>
      <h3 className="text-center ">
        See and get mesmerized by the photos from our travelled locations.
      </h3>
      <div className="gallery">
        <div className="galleryColumn">
          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
                alt="Portrait by Jessica Felicio"
                className="galleryImage"
              />
            </figure>
          </a>

          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/AHBvAIVqk64/300x500"
                alt="Portrait by Oladimeji Odunsi"
                className="galleryImage"
              />
            </figure>
          </a>

          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
                alt="Portrait by Alex Perez"
                className="galleryImage"
              />
            </figure>
          </a>
        </div>

        <div className="galleryColumn">
          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/AR7aumwKr2s/300x300"
                alt="Portrait by Noah Buscher"
                className="galleryImage"
              />
            </figure>
          </a>

          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
                alt="Portrait by Ivana Cajina"
                className="galleryImage"
              />
            </figure>
          </a>

          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/tV_1sC603zA/300x500"
                alt="Portrait by Sam Burriss"
                className="galleryImage"
              />
            </figure>
          </a>
        </div>

        <div className="galleryColumn">
          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
                alt="Portrait by Mari Lezhava"
                className="galleryImage"
              />
            </figure>
          </a>

          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/NTjSR3zYpsY/300x300"
                alt="Portrait by Ethan Haddox"
                className="galleryImage"
              />
            </figure>
          </a>

          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/2JH8d3ChNec/300x300"
                alt="Portrait by Amir Geshani"
                className="galleryImage"
              />
            </figure>
          </a>
        </div>

        <div className="galleryColumn">
          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                alt="Portrait by Guilian Fremaux"
                className="galleryImage"
              />
            </figure>
          </a>

          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/OQd9zONSx7s/300x300"
                alt="Portrait by Jasmin Chew"
                className="galleryImage"
              />
            </figure>
          </a>

          <a href="#" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                alt="Portrait by Dima DallAcqua"
                className="galleryImage"
              />
            </figure>
          </a>
        </div>
      </div>
    </>
  );
};

export default Gallery;
