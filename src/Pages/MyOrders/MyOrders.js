import React, {useEffect, useState} from "react";
import useAuth from "./../../Hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const {user} = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:4040/myorders/${email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [email]);

  const handleTourServiceDelete = id => {
    const url = `http://localhost:4040/deletetourorders/${id}`;

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
    <div>
      <h1>I am Dashboard {orders.length}</h1>
      <div className="all-products">
        <div className="row container text-center">
          {orders?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className=" border border p-2 m-2">
                <h4>{pd.email}</h4>
                <h5>{pd?.name}</h5>
                <h5>{pd?.price}</h5>
                <h6>{pd?.description}</h6>
                <button
                  onClick={() => handleTourServiceDelete(pd?._id)}
                  className="btn btn-danger m-2"
                >
                  delete
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
