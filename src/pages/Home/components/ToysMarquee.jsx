import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.png";

const ToysMarquee = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center my-10">Popular Toys</h1>
      <Marquee>
        <div id="toysMarquee" className="flex gap-10 mt-5">
          <img className="ms-10" src={img1} alt="" />
          <img className="opacity-80" src={img2} />
          <img className="opacity-80" src={img3} />
          <img src={img4} />
          <img src={img6} />
          <img src={img7} />
        </div>
      </Marquee>
    </div>
  );
};

export default ToysMarquee;
