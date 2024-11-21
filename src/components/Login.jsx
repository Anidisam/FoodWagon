import React from "react";
import "../assets/css/login.css";
import google from "../assets/images/golgo.jpeg";
import facebook from "../assets/images/fbook.png";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Heading Section */}
        <h1 className="login-heading">
          Welcome Back to <span className="brand-name">FoodWaGon</span>
        </h1>
        <p className="login-subtext">
          Login to your account and enjoy your favorite meals.
        </p>

        {/* Login Form */}
        <form className="login-form">
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="form-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#" className="forgot-password-link">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        {/* Social Login Buttons */}
        <div className="social-login">
          <button className="google-login">
            <img
              src={google}
              alt="Google Icon"
              className="social-icon"
            />
            Continue with Google
          </button>
          <button className="facebook-login">
            <img
              src={facebook}
              alt="Facebook Icon"
              className="social-icon"
            />
            Continue with Facebook
          </button>
        </div>

        {/* Signup Link */}
        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
