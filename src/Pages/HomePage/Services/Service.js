import React from "react";
import {Link} from "react-router-dom";
import "./ServicesAll.css";

const Service = ({service}) => {
  const {_id, name, price, description, img} = service;
  return (
    <div className="postcard dark green">
      <a className="postcard__img_link" href="#">
        <img className="postcard__img" src={img} />
      </a>
      <div className="postcard__text">
        <h1 className="postcard__title blue">{name}</h1>

        <div className="postcard__subtitle small"></div>
        <div className="postcard__bar"></div>
        <div className="postcard__preview-txt">{description}</div>
        <ul className="postcard__tagbox">
          <li className="tag__item play yellow">
            <i className="fas fa-tag mx-2"> </i>
            Price: $ {price}
          </li>

          <li className="tag__item play blue">
            <Link to={`/servicedetails/${_id}`}>
              <i className="fas fa-shopping-cart mx-2"></i>
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;
