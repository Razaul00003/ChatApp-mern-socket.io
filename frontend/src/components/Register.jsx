import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword"> Confirm Password</label>
              <input
                id=" confirmPassword"
                type=" password"
                className="form-control"
                placeholder=" Confirm Password"
              />
            </div>
            <div className="form-group">
              <div className="file-image">
                <div className="image"> </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input type="file" className="form-control" id="image" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Register" className="btn" />
            </div>
            <div className="form-group">
              <span>
                <Link to="/messenger/login">Login to your Account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
