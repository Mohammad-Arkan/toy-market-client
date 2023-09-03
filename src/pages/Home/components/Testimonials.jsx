import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import {BsPersonCircle} from "react-icons/bs";
import {BiSolidQuoteLeft} from "react-icons/bi";
import {BiSolidQuoteRight} from "react-icons/bi";

const Testimonials = () => {
  return (
    <>
      <div className="my-28">
        <h1 className="text-4xl font-semibold text-center my-10">
          What Our Client Says
        </h1>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="card w-3/4 bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-3 justify-center">
                    {" "}
                    <BsPersonCircle />
                    Jhon Doe
                  </h2>
                  <p className="text-xl">
                    <BiSolidQuoteLeft className="inline" /> Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Culpa soluta magni
                    alias quidem aperiam dolorem animi tempora natus blanditiis
                    officia expedita atque, eius vel aliquid ad, architecto,
                    earum amet mollitia?{" "}
                    <BiSolidQuoteRight className="inline" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="card w-3/4 bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-3 justify-center">
                    {" "}
                    <BsPersonCircle />
                    Charli Mark
                  </h2>
                  <p className="text-xl">
                    <BiSolidQuoteLeft className="inline" /> Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Culpa soluta magni
                    alias quidem aperiam dolorem animi tempora natus blanditiis
                    officia expedita atque, eius vel aliquid ad, architecto,
                    earum amet mollitia?{" "}
                    <BiSolidQuoteRight className="inline" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="card w-3/4 bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-3 justify-center">
                    {" "}
                    <BsPersonCircle />
                    Adam Smith
                  </h2>
                  <p className="text-xl">
                    <BiSolidQuoteLeft className="inline" /> Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Culpa soluta magni
                    alias quidem aperiam dolorem animi tempora natus blanditiis
                    officia expedita atque, eius vel aliquid ad, architecto,
                    earum amet mollitia?{" "}
                    <BiSolidQuoteRight className="inline" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
