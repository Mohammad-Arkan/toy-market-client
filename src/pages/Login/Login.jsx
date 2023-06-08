import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-16"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-2xl text-center font-bold">Login</h1>
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="LOGIN"
                  />
                </div>
              </form>
              <small className="label-text-alt text-center">
                Don't Have Account?{" "}
                <Link to="/signup" className="link link-hover">
                  Sign Up
                </Link>
              </small>
            </div>
            <button className="btn btn-gray">
              <i class="fa-brands fa-google"></i> Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
