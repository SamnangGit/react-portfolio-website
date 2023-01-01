import React from "react";

function LeftSidebar() {
  return (
    <div className="float-left clear-left md:flex hidden flex-col justify-between h-screen mx-auto sticky top-0 pt-1">
      <div>
        <img
          src="src\assets\letter-p.png"
          alt=""
          className="2xl:w-16 2xl:h-16 md:w-12 md:h-12"
        />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="src\assets\linkedin-logo.png"
          alt=""
          className="2xl:w-10 2xl:h-10 md:w-8 md:h-8 my-2 hover:scale-110 transition-all cursor-pointer"
          onClick={() => {
            window.open("https://www.linkedin.com/in/pheng-samnang-b789461b0");
          }}
        />
        <img
          src="src\assets\telegram.png"
          alt=""
          className="2xl:w-10 2xl:h-10 md:w-8 md:h-8 my-2 hover:scale-110 transition-all cursor-pointer"
          onClick={() => {
            window.open("https://t.me/samnang_pheng");
          }}
        />
        <img
          src="src\assets\facebook.png"
          alt=""
          className="2xl:w-10 2xl:h-10 md:w-8 md:h-8 my-2 hover:scale-110 transition-all cursor-pointer"
          onClick={() => {
            window.open("https://www.facebook.com/susisasuki?mibextid=ZbWKwL");
          }}
        />
        <img
          src="src\assets\github.png"
          alt=""
          className="2xl:w-10 2xl:h-10 md:w-8 md:h-8 my-2 hover:scale-110 transition-all cursor-pointer"
          onClick={() => {
            window.open("https://github.com/SamnangGit");
          }}
        />
        <div className="border-l-4 border-orange-300 h-52"></div>
      </div>
    </div>
  );
}

export default LeftSidebar;
