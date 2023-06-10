import React from "react";

const Blogs = () => {
  return (
    <div className="px-10 mx-auto my-10 space-y-3">
      <div className="collapse collapse-arrow bg-base-200 ">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Q1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>Ans: </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>Ans: </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>Ans: </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>Ans: </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
