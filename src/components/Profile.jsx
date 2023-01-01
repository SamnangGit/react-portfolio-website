import React from "react";
import MotionBtn from "../motion_button/MotionBtn";
import AnimatedText from "../animations/AnimateText";

function Profile() {
  return (
    <div className="mb-52">
      <div className="flex md:flex-row flex-col items-center 2xl:justify-around md:justify-between mt-8 md:mb-12 mb-2">
        <div className="self-start pl-6 pb-8">
          <div className="initial-text">
            <AnimatedText text="Hi I am" />
          </div>
          <div className="main-text">
            <AnimatedText text="Samnang PHENG" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div>
          <img
            src="src\assets\coding.png"
            alt=""
            className="rounded-full md:relative 2xl:-right-4 md:-right-1 md:border-2 border-orange-500 2xl:w-64 2xl:h-64 md:w-40 md:h-40 w-36 h-36 border-2"
          />
        </div>
        <div className="pt-2 md:pt-0">
          <div className="text-center initial-text">
            <AnimatedText text="a" />
          </div>
          <div className="main-text">
            <AnimatedText text="Software Developer" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-center 2xl:text-2xl md:text-lg font-Abel">
          {" "}
          &#123; IoT Maker &#125; &#123; Full Stack Developer &#125;
        </p>
        <p className="text-center 2xl:text-2xl md:text-lg font-Abel">
          {" "}
          &#123; Desktop App Developer &#125; &#123; PLC Programmer &#125;
        </p>
      </div>
      <div
        className="flex flex-row justify-center my-8 items-center relative 2xl:-right-2 mt-20"
        id="_motion-btn"
      >
        <MotionBtn />
      </div>
    </div>
  );
}

export default Profile;
