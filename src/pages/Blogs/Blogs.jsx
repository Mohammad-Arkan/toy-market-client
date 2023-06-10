import React from "react";
import {pageTitle} from "../../utils/PageTitle";

const Blogs = () => {
  pageTitle("Blogs");
  return (
    <div className="px-10 mx-auto my-10 space-y-3">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </div>
        <div className="collapse-content text-lg">
          <p>
            Ans: Access and refresh token both are used in the context of
            authentication and authorization in client-side. An Access
            represents authorization to access protected resources and refresh
            token used to refresh an exired access token without reauthentica.
            when user authenticates with server they receive both token. we
            should stored access token in memory or a short-lived storage like
            session storage or a secure cookie and refresh token require more
            secure storage it should stored in HTTP-only secure cookie.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q2. Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content text-lg">
          <p>
            Ans: SQL databases are best for structured data with complex while
            NoSQL databases provide more flexibility, scalability and support
            for differend data models.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q3. What is express js? What is Nest JS?
        </div>
        <div className="collapse-content text-lg">
          <p>
            Ans: Express.js is a minimalist and flexible web application
            framework for Node.js. and Nest.js is a full featured progressive
            TypeScript framework for building and scaleable and maintainable
            server side applications.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q4. What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content text-lg">
          <p>
            Ans: Aggregate is a MongoDB function. It is powerfull tool for
            performing advanced data procesing and analysis. it allows to define
            a sequience of stages to manipulate and aggregate data in various
            ways, providing flexibily and effiency in large.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
