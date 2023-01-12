import React from "react";
import SkillCard from "./SkillCard";
import {
  HTML5_logo,
  CSS3_logo,
  JavaScript_logo,
  React_logo,
  Bootstrap_logo,
  Tailwind_CSS_logo,
  Git_logo,
  github_logo,
} from "../assets";

function Skills() {
  return (
    <section id="skills" className="px-10 py-20">
      <h2 className="text-5xl mb-10 text-white font-bold text-center">
        Skills
      </h2>
      <div className="flex flex-col md:flex-row">
        {/* Objectives */}
        <div className="md:p-5 w-full md:w-1/2 mb-5">
          <p className="text-white text-center text-xl">
            My set of skills are focused on the different technologies that can
            make possible to develop a full responsive website, witch can be
            available for everyone no matter what device are they using. And not
            only that, right now, I'm focusing on learning Back-End technologies
            such as NodeJS and Express.
          </p>
        </div>
        {/* Badges section */}
        <div className="md:p-5 w-full md:w-1/2">
          <div className="mb-5 flex flex-col gap-5">
            <h3 className="text-2xl text-white font-bold text-center sm:text-left">
              Languages
            </h3>
            <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3">
              <SkillCard image={HTML5_logo} name="HTML" />
              <SkillCard image={CSS3_logo} name="CSS" />
              <SkillCard image={JavaScript_logo} name="JavaScript" />
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-5">
            <h3 className="text-2xl text-white font-bold text-center sm:text-left">
              Frameworks and Libraries
            </h3>
            <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3">
              <SkillCard image={Bootstrap_logo} name="Bootstrap" />
              <SkillCard image={Tailwind_CSS_logo} name="Tailwind CSS" />
              <SkillCard image={React_logo} name="React" />
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-5">
            <h3 className="text-2xl text-white font-bold text-center sm:text-left">
              Software and Tools
            </h3>
            <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3">
              <SkillCard image={Git_logo} name="Git" />
              <SkillCard image={github_logo} name="Github" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
