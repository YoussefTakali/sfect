import React from "react";
import "./login.css";
import image from "./tas.png";

function Login() {
  return (
    <>
      <div className="image">
        <img src={image} alt="taswira" />
      </div>
      <div className="container">
        <h1 className="title">Welcome back</h1>
        <form className="form">
          <div className="mail">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your name"
              type="text"
              className="email"
            />
          </div>
          <div className="pass">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              className="password"
            />
            <p className="fpass">Forget password ?</p>
          </div>

          <button type="submit" className="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
