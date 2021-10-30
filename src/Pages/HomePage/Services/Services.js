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
      <h2 className="text-primary mt-5">Our services</h2>
      <div class="dark">
        <div class="container py-4">
          <h1 class="h1 text-center" id="pageHeaderTitle">
            My Cards Dark
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
