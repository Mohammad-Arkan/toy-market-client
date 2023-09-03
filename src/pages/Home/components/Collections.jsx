import React from "react";
import {Link} from "react-router-dom";

const Collections = () => {
  return (
    <div>
      <h2 className="lg:text-5xl text-3xl font-semibold text-center">
        Carousol Collections
      </h2>
      <div className="hero my-24 bg-base-200 rounded-lg">
        <div className="hero-content gap-10 p-10 flex-col lg:flex-row">
          <div
            className="h-[30rem] carousel carousel-vertical rounded-box cursor-pointer"
            data-aos="fade-up-right">
            <div className="carousel-item ">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1616850508384-8a4078bda000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
            <div className="carousel-item">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1623111396948-5706bc25703e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1594787317741-fe9552efaa71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1616850508559-12c5ae8662bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </div>
          <div className="lg:w-2/3" data-aos="fade-up-left">
            <h1 className="text-5xl font-bold">Our New Toy Cars Collection!</h1>
            <p className="py-6">
              "A little kid's dream is to drive a toy car. A kid's wish comes
              true when your child drives the toy car you bought from us. Happy
              Birthday!""
            </p>
            <button className="btn btn-primary">
              <Link to="/all-toys">Collections</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
