import "./App.css";
import Home from "./Pages/HomePage/Home/Home";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Blog from "./Pages/Blog/Blog";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import MyOrders from "./Pages/MyOrders/MyOrders";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import AddNewService from "./Pages/AddNewService/AddNewService";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/placeorder/:serviceId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/servicedetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/addnewservice">
            <AddNewService></AddNewService>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
