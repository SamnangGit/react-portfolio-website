import React from "react";

function Project() {
  return (
    <div className="bg-black w-full pb-14 pt-2" id="_project">
      <div className="flex flex-row items-center">
        <p className="text-4xl font-Abel text-white p-3 font-semibold tracking-widest">
          iii. Project
        </p>
        <img src="src\assets\layers.png" alt="" className="h-11 w-11 mx-2" />
      </div>
      <div className="flex flex-col items-center">
        <div>
          <div className="p-8 relative">
            <img
              src="src\assets\Weather_Forcast.png"
              alt=""
              className="w-full h-full rounded-sm transition ease-in-out duration-500 hover:blur-0 blur-sm md:blur-md cursor-pointer"
              onClick={() => {
                window.open("https://github.com/SamnangGit/weather-forecast");
              }}
            />
          </div>
          <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl md:text-2xl mx-4 my-0 rounded-sm text-center">
            Weather Forecast <br /> (HTML, CSS, JS, JQuery, Ajax)
          </p>
        </div>
        <div>
          <div className="p-8">
            <img
              src="src\assets\POS.png"
              alt=""
              className="w-full h-full rounded-sm transition ease-in-out duration-500 hover:blur-0 blur-sm md:blur-md cursor-pointer"
              onClick={() => {
                window.open("https://github.com/SamnangGit/pos-book-store");
              }}
            />
          </div>
          <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl md:text-2xl mx-4 my-0 rounded-sm text-center">
            POS For Book Store <br /> (Adobe Xd, ,C#, WPF, ADO.Net, EF6, MS SQL
            Server)
          </p>
        </div>
        <div>
          <div className="p-8">
            <img
              src="src\assets\Web_2.png"
              alt=""
              className="w-full h-full rounded-sm transition ease-in-out duration-500 hover:blur-0 blur-sm md:blur-md cursor-pointer"
              onClick={() => {
                window.open("https://github.com/SamnangGit/writing-web-app");
              }}
            />
          </div>
          <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl md:text-2xl mx-4 my-0 rounded-sm text-center">
            Writing Platform <br /> (Adobe Xd, C#, ASP.Net, MS SQL Server, HTML,
            CSS, JS, Bootstrap)
          </p>
        </div>
        <div>
          <div className="p-8">
            <img
              src="src\assets\PLC_Washing_Machine.png"
              alt=""
              className="w-full h-full rounded-sm transition ease-in-out duration-500 hover:blur-0 blur-sm md:blur-md cursor-pointer"
              onClick={() => {
                window.open(
                  "https://github.com/SamnangGit/plc-washing-machine"
                );
              }}
            />
          </div>
          <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl md:text-2xl mx-4 my-0 rounded-sm text-center">
            Washing Machine <br /> (Siemens Tia Protal V16)
          </p>
        </div>
        <div>
          <div className="p-8">
            <img
              src="src\assets\IoT.jpg"
              alt=""
              className="w-full h-full rounded-sm transition ease-in-out duration-500 hover:blur-0 blur-sm md:blur-md cursor-pointer"
              onClick={() => {
                window.open(
                  "https://github.com/SamnangGit/color-tracking-robot"
                );
              }}
            />
          </div>
          <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl md:text-2xl mx-4 my-0 rounded-sm text-center">
            Color Tracking Robot <br /> (Arduino, Processing)
          </p>
        </div>
        <div>
          <div className="p-8">
            <img
              src="src\assets\M2MCom.webp"
              alt=""
              className="w-full h-full rounded-sm transition ease-in-out duration-500 hover:blur-0 blur-sm md:blur-md cursor-pointer"
              onClick={() => {
                window.open("https://github.com/SamnangGit/m-to-m");
              }}
            />
          </div>
          <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl md:text-2xl mx-4 my-0 rounded-sm text-center">
            Hobby Project <br /> In Developing Stage...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
