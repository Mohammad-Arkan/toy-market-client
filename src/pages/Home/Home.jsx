import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import ToyTabs from "./components/ToyTabs";
import Collections from "./components/Collections";

const Home = () => {
  return (
    <div>
      <Header />
      <Gallery />
      {/* <ToyTabs /> */}
      <Collections />
    </div>
  );
};

export default Home;
