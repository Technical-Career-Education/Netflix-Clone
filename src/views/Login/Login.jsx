import React from "react";
import logo from "../../assets/images/Netflix_logo.png";
import fb from "../../assets/icons/FB-f-Logo__blue.png";
import "./Login.css";

function Login() {
  return (
    <div className="login__body">
      <div className="login__overlay">
        <div className="login__navbar">
          <img src={logo} alt="Netflix Logo" className="logo" />
        </div>
        <div className="login__container">
          <form className="login__form">
            <h3>Sign In</h3>
            <input type="text" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <input type="submit" placeholder="Sign In" value="Sign In" />
          </form>
          <div className="form__actions">
            <div className="">
              <input type="checkbox" /> <label>Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
          <div className="login__with_fb">
            <img src={fb} alt="FB" />
            <span>Login with Facebook</span>
          </div>
          <div className="signup__section">
            <h3>
              New to Netflix?
              <a href="">Sign up now.</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
