import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useHistory} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import GoogleButton from "react-google-button";

const Login = () => {
  const {signInWithGoogle, setUser, setIsLoading} = useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
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
    <div className="my-5 py-5 text-center container">
      <GoogleButton label="Login With Google" onClick={handleGoogleLogin} />

      <p>
        New User ?<Link to="/register">Please register</Link>
      </p>
    </div>
  );
};

export default Login;
