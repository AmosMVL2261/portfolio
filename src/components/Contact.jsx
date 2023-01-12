import React from "react";
import { github_logo, linkedin } from "../assets";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[500px] flex flex-col gap-10 justify-center items-center"
    >
      <h2 className="text-5xl mb-10 text-white font-bold text-center">
        Contact
      </h2>
      {/* Links section */}
      <ul className="flex flex-row justify-evenly w-[300px] h-fit">
        <li className="">
          <a
            href="https://github.com/AmosMVL2261"
            target="_black"
            className="group flex flex-col gap-5 items-center"
          >
            <img
              src={github_logo}
              alt="github logo"
              className="group-hover:scale-125 transition-all duration-700 h-[64px] w-[64px]"
            />
            <h3 className="group-hover:scale-125 transition-all duration-700 text-xl text-white">
              Github
            </h3>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/amos-vega/"
            target="_black"
            className="group flex flex-col gap-5 items-center"
          >
            <img
              src={linkedin}
              alt="linkedin logo"
              className="group-hover:scale-125 transition-all duration-700 h-[64px] w-[64px]"
            />
            <h3 className="group-hover:scale-125 transition-all duration-700 text-xl text-white">
              LinkedIn
            </h3>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
