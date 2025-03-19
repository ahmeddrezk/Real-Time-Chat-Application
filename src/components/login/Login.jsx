import { toast } from "react-toastify";
import "./login.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [avatar, setAvatar] = useState({ file: null, url: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please enter both email and password.");
      return;
    }
    toast.success("Hello, welcome back!");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupData.username || !signupData.email || !signupData.password) {
      toast.error("All fields are required for sign up.");
      return;
    }
    toast.success("Sign Up Successfully!");
  };

  return (
    <div className="login-container d-flex">
      {/* Left Side - Form */}
      <div className="form-container d-flex flex-column justify-content-center">
        <div
          className={`item sign-in d-flex flex-column align-items-center justify-content-center ${
            isSignUp ? "d-none" : "d-flex"
          }`}
        >
          <h2>Welcome back,</h2>
          <form
            onSubmit={handleLogin}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <button type="submit">Sign In</button>
            <p className="text-center w-100">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-primary"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>

        <div
          className={`item sign-up d-flex flex-column align-items-center justify-content-center ${
            isSignUp ? "d-flex" : "d-none"
          }`}
        >
          <h2>Create an Account,</h2>
          <form
            onSubmit={handleSignup}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <label htmlFor="file" className="avatar-upload">
              <img src={avatar.url || "./img/avatar.png"} alt="Avatar" />
              Upload an image
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
              accept="image/*"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={signupData.username}
              onChange={handleSignupChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupChange}
            />
            <button type="submit">Sign Up</button>
            <p className="text-center w-100">
              Already have an account?{" "}
              <a
                href="#"
                className="text-primary"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="image-container">
        <img src="/img/main-img1.jpg" alt="Login Background" />
      </div>
    </div>
  );
};

export default Login;
