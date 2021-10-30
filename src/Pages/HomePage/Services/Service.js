import React from "react";
import {Link} from "react-router-dom";
import "./ServicesAll.css";

const Service = ({service}) => {
  // const {service} = props;
  const {_id, name, price, description, img} = service;
  return (
    <div class="postcard dark blue">
      {/* <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-warning">Book {name.toLowerCase()}</button>
      </Link>
      <Link to={`/booking/update/${_id}`}>
        <button className="btn btn-success ms-2">
          Update {name.toLowerCase()}
        </button>
      </Link> */}
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={img} />
      </a>
      <div class="postcard__text">
        <h1 class="postcard__title blue">{name}</h1>

        <div class="postcard__subtitle small"></div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">{description}</div>
        <ul class="postcard__tagbox">
          <li class="tag__item play yellow">
            <i class="fas fa-tag mr-2"></i>
            {price}
          </li>
          <li class="tag__item play red">
            <i class="fas fa-clock mr-2"></i>55 mins.
          </li>
          <li class="tag__item play blue">
            <a href="#">
              <i class="fas fa-play mr-2"></i>
              {_id}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;
