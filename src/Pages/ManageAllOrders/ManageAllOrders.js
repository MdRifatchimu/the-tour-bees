import React, {useState} from "react";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const ManageAllOrders = () => {
  const history = useHistory();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4040/tourorders";
    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  const handleTourServiceDelete = id => {
    const url = `http://localhost:4040/deletetourorders/${id}`;

    fetch(url, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          window.confirm("are you sure you wanna delete this order");
          const remaining = services.filter(service => service._id !== id);
          setServices(remaining);
        }
      });
  };

  const handleOrderStatus = id => {
    const orderSts = document.querySelector("#orderStatus");
    const statusChanged = services.filter(service => service._id === id || {});
    if (statusChanged || statusChanged > services) {
      orderSts.innerHTML = "Approve";
    } else {
      history.push("/");
    }
  };

  return (
    <div className="container my-5">
      <h2>This is manage all orders</h2>
      {services.map(service => (
        <div key={service._id}>
          <h3>Ordered By User:{service.name}</h3>
          <h3>Tour Service Name:{service.service_name}</h3>
          <p>Email: {service.email}</p>
          <p>Phone: {service.phone}</p>
          <p id="orderStatus">order status : pending</p>

          <button
            className="btn btn-danger"
            onClick={() => handleTourServiceDelete(service._id)}
          >
            delete
          </button>
        </div>
      ))}
      <h2 className="my-3">
        Hit The Approve Order Button To Approve user's order according to the
        their order serial.
      </h2>
      <p className="text-danger">
        Note: The Person Ordered First Will Get The Delivery First. Thank You
      </p>
      <button onClick={handleOrderStatus} className="btn btn-success my-3">
        Approve Order
      </button>
    </div>
  );
};

export default ManageAllOrders;
