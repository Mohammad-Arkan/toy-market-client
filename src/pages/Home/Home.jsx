import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import ToyTabs from "./components/ToyTabs";
import Collections from "./components/Collections";
import Feedback from "./components/Feedback";

const Home = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <ToyTabs />
      <Collections />
      <Feedback />
    </div>
  );
};

export default Home;
