import React, {useContext} from "react";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";
import {pageTitle} from "../../utils/PageTitle";

const Login = () => {
  const {signIn, googleSignIn, user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  pageTitle("Login");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        navigate(from, {replace: true});
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-1/2 lg:flex-row">
          <div className="w-1/2 mr-16"></div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-200">
            <div className="card-body">
              <h1 className="text-2xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
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
              <div className="divider">OR</div>
              <button onClick={googleSignIn} className="btn btn-gray">
                <i className="fa-brands fa-google"></i> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
