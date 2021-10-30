import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const {serviceId} = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://nameless-wildwood-25461.herokuapp.com/tourservices/${serviceId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data));
  }, []);

  return (
    <div className="container mb-5 ">
      <div className="row">
        <div className="col-md-6 col-sm-6  col align-self-center">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img src={service.img} />
              </a>

              <Link to={`/placeorder/${serviceId}`} className="add-to-cart">
                Place Order
              </Link>
            </div>
            <div className="product-content">
              <h3 className="title text-danger">{service.name}</h3>
              <p>{service.description}</p>
              <div className="price">$ {service.price} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
