import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";
import {pageTitle} from "../../utils/PageTitle";

const SignUp = () => {
  const {createUser, updateUserData} = useContext(AuthContext);
  const navigate = useNavigate();
  pageTitle("Sign Up");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserData(user, name, photoURL);
        console.log(user);
        navigate("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-11/12 md:w-1/2 lg:flex-row">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-2xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Sign Up"
                  />
                </div>
              </form>
              <small className="label-text-alt text-center">
                Already Have an Account?{" "}
                <Link to="/login" className="link link-hover">
                  Login
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
