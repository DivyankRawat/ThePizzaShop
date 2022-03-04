import React from "react";
import bgVideo from "../assets/bg.mp4";

const Main = () => {
  return (
    <>
      <video
        src={bgVideo}
        className=" absolute top-0 left-0 w-full object-cover max-h-128"
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
      <div className="text-white absolute top-0 left-0 flex flex-col justify-center text-right w-full h-full max-h-128 pr-10 bg-blackOverlay">
        <p className="font-noto text-8xl">Perfect Pizza</p>
        <p className="text-xl font-mont">
          Experience the taste of a perfect pizza at The Pizza Shop, <br /> one
          of the best restaurants in the Town!
        </p>
      </div>
    </>
  );
};

export default Main;
