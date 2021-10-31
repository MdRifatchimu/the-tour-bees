import React, {useEffect, useState} from "react";
import useAuth from "./../../Hooks/useAuth";
import "./MyOrders.css";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const {user} = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`https://nameless-wildwood-25461.herokuapp.com/myorders/${email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [email]);

  const handleTourServiceDelete = id => {
    const url = `https://nameless-wildwood-25461.herokuapp.com/${id}`;

    fetch(url, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          window.confirm("are you sure you wanna delete this order");
          const remaining = orders.filter(service => service._id !== id);
          setOrders(remaining);
        }
      });
  };
  return (
    <div className="container">
      <h1>Total Orders {orders.length}</h1>
      <div className="all-products">
        <div className="row container text-center">
          {orders?.map((pd, index) => (
            <div className="col-md-6 col-lg-4 ">
              <div
                key={pd?._id}
                className=" border border-success p-2 m-2 single-products"
              >
                <h4 className="text-center fw-bold">User Email : {pd.email}</h4>
                <h5 className="text-center">User Name: {pd.name}</h5>
                <h5 className="text-center">
                  Tour Service Name : {pd.service_name}
                </h5>
                <h6 className="text-center">Address: {pd.address}</h6>
                <button
                  onClick={() => handleTourServiceDelete(pd?._id)}
                  className="btn btn-danger m-2"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
