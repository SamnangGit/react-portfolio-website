import React from "react";

function RightSidebar() {
  return (
    <div className="float-right clear-right md:flex hidden flex-col justify-between h-screen mx-auto sticky top-0 pt-1">
      <div>
        <img
          src="src\assets\letter-s.png"
          alt=""
          className="2xl:w-16 2xl:h-16 md:w-12 md:h-12"
        />
      </div>
      <div className="flex flex-col items-center">
        <div
          className="my-4 tracking-widest font-Abel 2xl:text-lg"
          style={{ writingMode: "vertical-rl" }}
        >
          <a
            href="mailto:phengsamnangsp@gmail.com"
            className=" cursor-pointer focus:ring-0 hover:font-semibold"
          >
            phengsamnangsp@gmail.com
          </a>
        </div>
        <div className="border-l-4 border-orange-300 h-52"></div>
      </div>
    </div>
  );
}

export default RightSidebar;
