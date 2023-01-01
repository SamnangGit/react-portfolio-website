import React from "react";

function Education() {
  return (
    <div className="bg-black w-full pb-14 pt-2" id="_education">
      <div className="flex flex-row items-center head">
        <p className="text-4xl font-Abel text-white p-3 font-semibold tracking-widest">
          i. Education
        </p>
        <img src="src\assets\mortarboard.png" alt="" className="h-14 w-14" />
      </div>

      <div className="flex flex-col items-center">
        <img
          src="src\assets\ITStep.png"
          alt=""
          className="h-48 w-48 rounded-sm border-2 border-slate-500 mt-14 hover:scale-125 transition-all duration-700 cursor-pointer"
          onClick={() => {
            const element = document.querySelector("#_education");
            const description = document.querySelectorAll(".description");
            const head = document.querySelector(".head");

            element.style.backgroundImage =
              "url(src/assets/IT_Step_Campus.jpg)";
            // element.style.backgroundSize = "contain";
            element.classList.add("lg:bg-cover", "bg-contain");
            element.addEventListener("click", () => {
              element.style.backgroundImage = "none";
              // element.style.backgroundSize = "none";
              element.classList.remove("lg:bg-cover", "bg-contain");
              head.classList.remove("bg-black");
              description.forEach((e) => {
                e.classList.remove("bg-white");
                e.classList.add("bg-black");
                e.classList.remove("text-black");
                e.classList.add("text-white");
              });
            });

            console.log(description);
            head.classList.add("bg-black");
            description.forEach((e) => {
              e.classList.remove("bg-black");
              e.classList.add("bg-white");
              e.classList.remove("text-white");
              e.classList.add("text-black");
            });
          }}
        />
        <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl m-4 rounded-sm text-justify description">
          2021 – Present: Studying AS in Software Development at IT Academy Step
          Institute
        </p>
        <img
          src="src\assets\AUPP_IMG.jpg"
          alt=""
          className="h-48 w-48 rounded-sm border-2 border-slate-500 mt-10 hover:scale-125 transition-all duration-700 cursor-pointer"
          onClick={() => {
            const element = document.querySelector("#_education");
            const description = document.querySelectorAll(".description");
            const head = document.querySelector(".head");

            element.style.backgroundImage = "url(src/assets/AUPP_Campus.jpg)";
            // element.classList.add("bg-[url('src/assets/AUPP_Campus.jpg')]");
            // element.style.backgroundSize = "contain";
            element.classList.add("lg:bg-cover", "bg-contain");
            element.addEventListener("click", () => {
              element.style.backgroundImage = "none";
              // element.style.backgroundSize = "none";
              element.classList.remove("lg:bg-cover", "bg-contain");
              head.classList.remove("bg-black");
              description.forEach((e) => {
                e.classList.remove("bg-white");
                e.classList.add("bg-black");
                e.classList.remove("text-black");
                e.classList.add("text-white");
              });
            });

            console.log(description);
            head.classList.add("bg-black");
            description.forEach((e) => {
              e.classList.remove("bg-black");
              e.classList.add("bg-white");
              e.classList.remove("text-white");
              e.classList.add("text-black");
            });
          }}
        />
        <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl m-4 rounded-sm text-justify description">
          2022 – Present: Studying BSc in Information and Communication
          Technology at American University of Phnom Penh
        </p>
        <img
          src="src\assets\ArrowDot.png"
          alt=""
          className="h-48 w-48 rounded-sm border-2 border-slate-500 mt-10 hover:scale-125 transition-all duration-700 cursor-pointer"
          onClick={() => {
            const element = document.querySelector("#_education");
            const description = document.querySelectorAll(".description");
            const head = document.querySelector(".head");

            element.style.backgroundImage =
              "url(src/assets/ArrowDot_Campus.jpg)";
            // element.style.backgroundSize = "contain";
            element.classList.add("lg:bg-cover", "bg-contain");
            element.addEventListener("click", () => {
              element.style.backgroundImage = "none";
              // element.style.backgroundSize = "none";
              element.classList.remove("lg:bg-cover", "bg-contain");
              head.classList.remove("bg-black");
              description.forEach((e) => {
                e.classList.remove("bg-white");
                e.classList.add("bg-black");
                e.classList.remove("text-black");
                e.classList.add("text-white");
              });
            });

            console.log(description);
            head.classList.add("bg-black");
            description.forEach((e) => {
              e.classList.remove("bg-black");
              e.classList.add("bg-white");
              e.classList.remove("text-white");
              e.classList.add("text-black");
            });
          }}
        />
        <p className="text-white p-4 border-2 border-slate-500 font-Abel text-xl m-4 rounded-sm text-justify description">
          2022 – 2023: Studying IoT and Automation at ArrowDot Academy
        </p>
      </div>
    </div>
  );
}

export default Education;
