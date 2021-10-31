import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import useAuth from "./../../Hooks/useAuth";
import {Link, useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

import "./PlaceOrder.css";
const PlaceOrder = () => {
  let history = useHistory();
  const {serviceId} = useParams();
  const [service, setService] = useState({});
  const {user} = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm();

  useEffect(() => {
    const url = `https://nameless-wildwood-25461.herokuapp.com/tourservices/${serviceId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data));
  }, []);

  const onSubmit = data => {
    fetch("https://nameless-wildwood-25461.herokuapp.com/tourorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert("order processed successfully");

          reset();
          history.push("/home");
        }
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Tips To Follow And Confirm Order</h2>
      <p className="text-center">
        please Click on each input field of name, email and service name so that
        you can get the services approved on our database. <br />
        thanks in advance for being with us
      </p>
      <h2>Tour Service Price: ${service.price}</h2>
      <div className="row">
        <div className="col-6 col-sm-12">
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              {...register("name", {required: true})}
            />

            <input
              defaultValue={user.email}
              {...register("email", {required: true})}
            />
            <input
              defaultValue={service.name}
              {...register("service_name", {required: true})}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input
              placeholder="phone number"
              defaultValue=""
              {...register("phone")}
            />

            <input type="submit" />
          </form>
        </div>
        <div className="col-3 col-sm-12">
          <h1 className="text-center">Order Status</h1>
          <h3 className="text-center">Pending</h3>
          <p className="text-center">
            go To Manage All Orders To Approve The Order
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
