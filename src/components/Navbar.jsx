import React from "react";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function Navbar() {
  const scrollDirection = useScrollDirection();
  return (
    <>
      <div
        className={`block z-50 sticky ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        } transition-all duration-500 md:hidden`}
      >
        <div
          className="md:hidden flex flex-row justify-between p-1 bg-white"
          id="_s-navbar"
        >
          <img
            src="src\assets\letter-p.png"
            alt=""
            className="h-12 w-12 cursor-pointer"
            onClick={() => scroll.scrollToTop()}
          />
          <button
            onClick={() => {
              document.querySelector("#_menu-bar").classList.remove("hidden");
              document.querySelector("#_menu-bar").classList.add("flex");
              document.querySelector("#_s-navbar").classList.add("hidden");
            }}
          >
            <img src="src\assets\menu.png" alt="" className="h-12 w-12" />
          </button>
          <img
            src="src\assets\letter-s.png"
            alt=""
            className="h-12 w-12 cursor-pointer"
            onClick={() => scroll.scrollToBottom()}
          />
        </div>
      </div>

      <div
        className={`block z-50 sticky ${
          scrollDirection === "down" ? "top-0" : "top-0"
        } transition-all duration-500 md:hidden`}
      >
        <div
          className="md:hidden hidden flex-row justify-between bg-white"
          id="_menu-bar"
        >
          <div className="flex flex-col items-center mx-auto justify-between mt-1 bg-white">
            <div>
              <img src="src\assets\letter-p.png" alt="" className="w-10 h-10" />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src\assets\linkedin-logo.png"
                alt=""
                className="w-8 h-8 my-2 hover:scale-110 transition-all"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/pheng-samnang-b789461b0"
                  );
                }}
              />
              <img
                src="src\assets\telegram.png"
                alt=""
                className="w-8 h-8 my-2 hover:scale-110 transition-all"
                onClick={() => {
                  window.open("https://t.me/samnang_pheng");
                }}
              />
              <img
                src="src\assets\facebook.png"
                alt=""
                className="w-8 h-8 my-2 hover:scale-110 transition-all"
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/susisasuki?mibextid=ZbWKwL"
                  );
                }}
              />
              <img
                src="src\assets\github.png"
                alt=""
                className="w-8 h-8 my-2 hover:scale-110 transition-all"
                onClick={() => {
                  window.open("https://github.com/SamnangGit");
                }}
              />
              <div className="border-l-4 border-orange-300 h-52"></div>
            </div>
          </div>
          <div className="w-8/12 h-screen bg-black flex flex-col items-center">
            <div>
              <button
                onClick={() => {
                  document.querySelector("#_menu-bar").classList.add("hidden");
                  document
                    .querySelector("#_s-navbar")
                    .classList.remove("hidden");
                }}
              >
                <img src="src\assets\remove.png" alt="" className="w-14 h-14" />
              </button>
            </div>
            <div className="relative top-36">
              <ul className="list-none">
                <li>
                  <p className="text-white font-semibold font-Abel text-4xl text-center mb-2 cursor-pointer">
                    <Link
                      activeClass="active"
                      to="_education"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => {
                        document
                          .querySelector("#_menu-bar")
                          .classList.add("hidden");
                        document
                          .querySelector("#_s-navbar")
                          .classList.remove("hidden");
                      }}
                    >
                      Education
                    </Link>
                  </p>
                  <hr className="w-28 h-1 rounded-sm bg-orange-500 mx-auto" />
                </li>
                <li className="mt-6">
                  <p className="text-white font-semibold font-Abel text-4xl text-center mb-2 cursor-pointer">
                    <Link
                      activeClass="active"
                      to="_project"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => {
                        document
                          .querySelector("#_menu-bar")
                          .classList.add("hidden");
                        document
                          .querySelector("#_s-navbar")
                          .classList.remove("hidden");
                      }}
                    >
                      Project
                    </Link>
                  </p>
                  <hr className="w-20 h-1 rounded-sm bg-orange-500 mx-auto" />
                </li>
                <li className="mt-6">
                  <p className="text-white font-Abel font-semibold text-4xl text-center mb-2 cursor-pointer">
                    <Link
                      activeClass="active"
                      to="_skill"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => {
                        document
                          .querySelector("#_menu-bar")
                          .classList.add("hidden");
                        document
                          .querySelector("#_s-navbar")
                          .classList.remove("hidden");
                      }}
                    >
                      Skill
                    </Link>
                  </p>
                  <hr className="w-12 h-1 rounded-sm bg-orange-500 mx-auto" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto justify-between mt-1 bg-white">
            <div>
              <img src="src\assets\letter-s.png" alt="" className="w-10 h-10" />
            </div>
            <div className="flex flex-col items-center">
              <div
                className="my-4 tracking-widest font-Abel text-lg"
                style={{ writingMode: "vertical-rl" }}
              >
                <a
                  href="mailto:phengsamnangsp@gmail.com"
                  className=" cursor-pointer focus:ring-0 focus:font-semibold hover:font-semibold"
                >
                  phengsamnangsp@gmail.com
                </a>
              </div>
              <div className="border-l-4 border-orange-300 h-52"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:block z-50 sticky ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        } transition-all duration-500 hidden`}
      >
        <div className="hidden md:block">
          <nav className="bg-black 2xl:h-14 md:h-12 flex items-center justify-between">
            <span className="text-white 2xl:text-2xl md:text-xl pl-4 pr-4 font-Abel cursor-pointer">
              <Link
                activeClass="active"
                to="_education"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="hover:text-black transition-all"
              >
                Education
              </Link>
            </span>
            <ul className="flex justify-center flex-row items-center">
              <li>
                <img
                  className="2xl:w-12 2xl:h-12 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-all"
                  src="src\assets\upper.png"
                  alt=""
                  onClick={() => scroll.scrollToTop()}
                />
              </li>
              <li>
                <span className="text-white 2xl:text-2xl md:text-xl pl-4 pr-4 font-Abel cursor-pointer">
                  <Link
                    activeClass="active"
                    to="_project"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="hover:text-black transition-all"
                  >
                    Project
                  </Link>
                </span>
              </li>
              <li>
                <img
                  className="2xl:w-12 2xl:h-12 md:w-8 md:h-8 rotate-180 cursor-pointer hover:scale-110 transition-all"
                  src="src\assets\upper.png"
                  alt=""
                  onClick={() => scroll.scrollToBottom()}
                ></img>
              </li>
            </ul>
            <span className="text-white 2xl:text-2xl md:text-xl pl-4 pr-4 font-Abel cursor-pointer">
              <Link
                activeClass="active"
                to="_skill"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="hover:text-black transition-all"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Skill
              </Link>
            </span>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
