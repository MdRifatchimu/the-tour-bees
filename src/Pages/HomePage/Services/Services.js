import React, {useEffect, useState} from "react";
import Service from "./Service";
import "./ServicesAll.css";
const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    const url = "https://nameless-wildwood-25461.herokuapp.com/tourservices";
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data));
  }, []);
  return (
    <div id="services">
      <div className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center text-white" id="pageHeaderTitle">
            Our Event Services
          </h1>
          <div>
            {services.map(service => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
