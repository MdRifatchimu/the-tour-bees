import React from "react";
import GoogleButton from "react-google-button";
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const {signInWithGoogle, setUser, setIsLoading} = useAuth();

  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const handleGoogleRegister = () => {
    signInWithGoogle()
      .then(res => {
        setIsLoading(true);
        setUser(res.user);
        history.push(url);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h1>Hover Here To Register With Google</h1>
        <br />
        <br />
        <GoogleButton
          label="Login With Google"
          onClick={handleGoogleRegister}
        />
        <p>
          Already Registered ?<Link to="/login">Please Login</Link>
        </p>
      </div>
      <div className="flap"></div>
    </div>
  );
};

export default Register;
