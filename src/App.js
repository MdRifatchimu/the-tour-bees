import "./App.css";
import Home from "./Pages/HomePage/Home/Home";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

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
          {/* 
         
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/supliments">
            <Supliments></Supliments>
          </PrivateRoute>
          <PrivateRoute path="/equipments">
            <Equipments></Equipments>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
