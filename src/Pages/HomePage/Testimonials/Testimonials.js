import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="my-3 py-5  backgroundTestimonial">
      <h2 className="text-white text-center">
        Some Words From The Creators of
        <span className="text-danger"> The Tour Bees</span>
      </h2>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <div class="face front-face">
                <img
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  alt=""
                  class="profile"
                />
                <div class="pt-3 text-uppercase name"> Robert Garrison </div>
                <div class="designation">Android Developer</div>
              </div>
              <div class="face back-face">
                <span class="fas fa-quote-left"></span>
                <div class="testimonial">
                  {" "}
                  <p>
                    {" "}
                    I made back the purchase price in just 48 hours! Thank you
                    for making it pain less, pleasant. The service was
                    excellent. I will refer everyone I know.{" "}
                  </p>
                </div>
                <span class="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="face front-face">
                <img
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  class="profile"
                />
                <div class="pt-3 text-uppercase name"> Jeffery Kennan </div>
                <div class="designation">Full Stack Developer</div>
              </div>
              <div class="face back-face">
                <span class="fas fa-quote-left"></span>
                <div class="testimonial">
                  {" "}
                  <p>
                    {" "}
                    Really good, you have saved our business! I made bacck the
                    purchase price in just 48 hours! man, this thing is getting
                    better and better as I learn more about it.
                  </p>{" "}
                </div>
                <span class="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="face front-face">
                <img
                  src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  class="profile"
                />
                <div class="pt-3 text-uppercase name"> Issac Maxwell </div>
                <div class="designation">Finance Director</div>
              </div>
              <div class="face back-face">
                <span class="fas fa-quote-left"></span>
                <div class="testimonial">
                  {" "}
                  <p>
                    {" "}
                    Account keeper is the most valuable business research we
                    have EVER purchased. Without electrician, we would ahave
                    gone bankrupt by now.
                  </p>{" "}
                </div>
                <span class="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
