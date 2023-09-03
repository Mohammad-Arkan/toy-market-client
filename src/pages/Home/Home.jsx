import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import ToyTabs from "./components/ToyTabs";
import Collections from "./components/Collections";
import Feedback from "./components/Feedback";
import {pageTitle} from "../../utils/PageTitle";
import Clients from "./components/Testimonials";
import ToysMarquee from "./components/toysMarquee";
import Testimonials from "./components/Testimonials";

const Home = () => {
  pageTitle("Home");
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Gallery />
        <ToyTabs />
        <Collections />
        <ToysMarquee />
        <Testimonials />
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
