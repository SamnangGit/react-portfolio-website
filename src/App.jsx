import React from "react";
import { useRef } from "react";

import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { useFollowPointer } from "./use-follow-pointer";
import { motion } from "framer-motion";

const App = () => {
  // ball animation
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  // aos
  const scrollRef = useRef(null);

  return (
    <>
      <div className="flex justify-between">
        <LeftSidebar />

        {/* Ball Animation */}
        <div className=" w-screen 2xl:w-11/12 md:w-10/12">
          <Navbar />
          <motion.div
            ref={ref}
            className="box"
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 3,
              stiffness: 30,
              restDelta: 0.001,
            }}
          />

          {/* PROFILE */}
          <Profile />

          {/* EDUCATION */}
          <div ref={scrollRef} style={{ overflow: "none" }}>
            <motion.div
              initial={{
                opacity: 0,
                transition: { duration: 0.5 },
                translateY: 50,
              }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
                translateY: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <Education />
            </motion.div>
          </div>

          {/* SKILL */}
          <div ref={scrollRef} style={{ overflow: "none" }}>
            <motion.div
              initial={{
                opacity: 0,
                transition: { duration: 0.5 },
                translateY: 50,
              }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
                translateY: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <Skill />
            </motion.div>
          </div>

          {/* PROJECT */}
          <div ref={scrollRef} style={{ overflow: "none" }}>
            <motion.div
              initial={{
                opacity: 0,
                transition: { duration: 0.5 },
                translateY: 50,
              }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
                translateY: 0,
              }}
              viewport={{
                once: true,
                amount: 0.05,
              }}
            >
              <Project />
            </motion.div>
          </div>
          <Contact />
          <Footer />
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default App;
