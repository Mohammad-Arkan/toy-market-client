import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="carousel w-full rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/assets/img1.jpg" className="w-full" />
          <div className="absolute h-full flex gap-5 transform top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-52 p-10">
              <h2 className="text-4xl lg:text-7xl font-bold">
                Police Toy Cars Available <br />
                Order Now!
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/assets/img2.jpg" className="w-full" />
          <div className="absolute h-full flex gap-5 transform top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-52 p-10">
              <h2 className="text-4xl lg:text-7xl font-bold">
                Toy Cars Available <br />
                Order Today
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/assets/img3.jpg" className="w-full" />
          <div className="absolute h-full flex gap-5 transform top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-52 p-10">
              <h2 className="text-4xl lg:text-7xl font-bold">
                Super Toy Cars Available <br />
                Buy Now!
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
