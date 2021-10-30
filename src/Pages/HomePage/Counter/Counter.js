import React from "react";
import "./Counter.css";

const Counter = () => {
  return (
    <div class="my-5">
      <h2 className="text-center ">The Tour Bees Statistics</h2>
      <div class="container">
        <div class="row">
          <div class="four col-md-3">
            <div class="counter-box colored">
              <i class="far fa-thumbs-up"></i>
              <span class="counter">2147</span>
              <p>Happy Customers</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <i class="fas fa-user-friends"></i>
              <span class="counter">3275</span>
              <p>Registered Members</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <i class="fa fa-shopping-cart"></i>
              <span class="counter">289</span>
              <p>Available Services</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <i class="fa fa-user"></i>
              <span class="counter">1563</span>
              <p>Saved Trees in Tours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
