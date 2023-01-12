import React from "react";
import { devices } from "../assets";

function Header() {
  return (
    <section id="home" className="min-h-[500px] lg:py-28">
      <div className="w-full h-full flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
        {/* Intro text section */}
        <div className="flex flex-col justify-center items-center lg:items-start py-7 px-10 w-[640px] h-[320px] text-center md:text-left">
          <p className="text-5xl text-white font-bold mb-3">
            Hello, I'm Amos Vega
          </p>
          <p className="text-4xl text-white font-bold mb-7">Web developer</p>
          <div className="w-[150px] h-[50px] border-2 border-white-400 rounded-xl text-lg text-white text-bold flex justify-center items-center">
            <button>
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
        {/* Intro image section */}
        <div className="flex justify-center items-center w-[640px] h-[320px] ">
          <img className="" src={devices} alt="devices" />
        </div>
      </div>
    </section>
  );
}

export default Header;
