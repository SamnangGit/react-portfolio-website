import React from "react";

function Footer() {
  return (
    <div className="md:h-20 w-full flex flex-col items-center justify-center bg-white rounded-sm p-2">
      <div className="w-fit group cursor-pointer flex flex-col items-center justify-center">
        <a
          href="https://github.com/SamnangGit/react-portfolio-website"
          target="_blank"
        >
          <span className="text-center font-Abel text-black text-sm md:text-base group-hover:text-orange-500 group-hover:scale-105 transition-all duration-150">
            Design & Build by Samnang Pheng
          </span>
        </a>

        <a
          href="https://github.com/SamnangGit/react-portfolio-website"
          target="_blank"
        >
          <span className="text-center font-Abel text-black text-sm md:text-base group-hover:text-orange-500 group-hover:scale-105 transition-all duration-150">
            Git Me
          </span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
