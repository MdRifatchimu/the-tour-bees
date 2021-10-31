import axios from "axios";
import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

const AddNewService = () => {
  let history = useHistory();
  const {register, handleSubmit, reset} = useForm();
  const onSubmit = data => {
    axios
      .post("https://nameless-wildwood-25461.herokuapp.com/tourservices", data)
      .then(res => {
        if (res.data.insertedId) {
          alert("success");
          reset();
          history.push("/");
        }
      });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">
        Please Fill All The Inputs To Add A New Event Service
      </h2>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {required: true, maxLength: 20})}
          placeholder="name"
        />
        <br />
        <br />
        <textarea {...register("description")} placeholder="description" />
        <br />
        <br />
        <input type="number" {...register("price")} placeholder="price" />
        <br />
        <br />
        <input {...register("img")} placeholder="image url" />
        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewService;
