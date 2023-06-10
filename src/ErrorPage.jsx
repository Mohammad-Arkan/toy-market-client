import React from "react";
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img width={250} src="/error.png" alt="" />
          <h1 className="text-5xl text-warning my-5 font-bold">404 ERROR</h1>
          <Link to="/">
            <button className="btn btn-gray">Page Not Found ✨ Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
