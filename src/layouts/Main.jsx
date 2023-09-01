import React from "react";
import NavBar from "../pages/Shared/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
