import React from "react";
import GoogleButton from "react-google-button";
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

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
    <div>
      <div className="my-5 py-5 text-center container">
        <GoogleButton
          label="Register With Google"
          onClick={handleGoogleRegister}
        />

        <p>
          New User ?<Link to="/login">Please register</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
