import React from "react";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="my-5">
      <h2 className="text-center ">The Tour Bees Statistics</h2>
      <div className="container">
        <div className="row">
          <div className=" col-md-3 ">
            <div className="colored">
              <div className="counter-box ">
                <i className="far fa-thumbs-up"></i>
                <span className="counter">2147</span>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className=" col-md-3 ">
            <div className="colored">
              <div className="counter-box ">
                <i className="fas fa-user-friends"></i>
                <span className="counter">3275</span>
                <p>Registered Members</p>
              </div>
            </div>
          </div>
          <div className=" col-md-3 ">
            <div className="colored">
              <div className="counter-box ">
                <i className="fa fa-shopping-cart"></i>
                <span className="counter">289</span>
                <p>Available Services</p>
              </div>
            </div>
          </div>
          <div className=" col-md-3 ">
            <div className="colored">
              <div className="counter-box ">
                <i className="fa fa-user"></i>
                <span className="counter">1563</span>
                <p>Saved Trees in Tours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
