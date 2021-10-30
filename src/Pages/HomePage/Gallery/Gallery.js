import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <h2 className="text-center text-success my-5"> See Our Photo Gallery</h2>
      <p className="text-center ">
        See and get mesmerized by the photos from our travelled locations.
      </p>
      <div className="gallery">
        <div className="galleryColumn">
          <a href="https://unsplash.com/@jeka_fe" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
                alt="Portrait by Jessica Felicio"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Jessica Felicio
              </figcaption>
            </figure>
          </a>

          <a href="https://unsplash.com/@oladimeg" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/AHBvAIVqk64/300x500"
                alt="Portrait by Oladimeji Odunsi"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Oladimeji Odunsi
              </figcaption>
            </figure>
          </a>

          <a href="https://unsplash.com/@a2eorigins" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
                alt="Portrait by Alex Perez"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Alex Perez
              </figcaption>
            </figure>
          </a>
        </div>

        <div className="galleryColumn">
          <a href="https://unsplash.com/@noahbuscher" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/AR7aumwKr2s/300x300"
                alt="Portrait by Noah Buscher"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Noah Buscher
              </figcaption>
            </figure>
          </a>

          <a href="https://unsplash.com/@von_co" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
                alt="Portrait by Ivana Cajina"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Ivana Cajina
              </figcaption>
            </figure>
          </a>

          <a href="https://unsplash.com/@samburriss" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/tV_1sC603zA/300x500"
                alt="Portrait by Sam Burriss"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Sam Burriss
              </figcaption>
            </figure>
          </a>
        </div>

        <div className="galleryColumn">
          <a href="https://unsplash.com/@marilezhava" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
                alt="Portrait by Mari Lezhava"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Mari Lezhava
              </figcaption>
            </figure>
          </a>

          <a href="https://unsplash.com/@ethanhaddox" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/NTjSR3zYpsY/300x300"
                alt="Portrait by Ethan Haddox"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Ethan Haddox
              </figcaption>
            </figure>
          </a>

          <a href="https://unsplash.com/@mr_geshani" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/2JH8d3ChNec/300x300"
                alt="Portrait by Amir Geshani"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Amir Geshani
              </figcaption>
            </figure>
          </a>
        </div>

        <div className="galleryColumn">
          <a href="https://unsplash.com/@frxgui" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                alt="Portrait by Guilian Fremaux"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Guilian Fremaux
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@majestical_jasmin"
            className="galleryLink"
          >
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/OQd9zONSx7s/300x300"
                alt="Portrait by Jasmin Chew"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Jasmin Chew
              </figcaption>
            </figure>
          </a>

          <a href="https://unsplash.com/@dimadallacqua" className="galleryLink">
            <figure className="galleryThumb">
              <img
                src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                alt="Portrait by Dima DallAcqua"
                className="galleryImage"
              />
              <figcaption className="galleryCaption">
                Portrait by Dima DallAcqua
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </>
  );
};

export default Gallery;
