import React from "react";
import { profile } from "../assets";
function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-5xl mb-10 text-white font-bold text-center">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center w-full px-10">
        {/* Image section */}
        <div className="lg:w-1/2 md:mr-5 xl:mr-0 mb-5 lg:mb-0 flex justify-center">
          <img
            className="w-[360px] h-[200px] sm:w-[540px] sm:h-[300px] rounded-xl object-cover"
            src={profile}
            alt="profile picture"
          />
        </div>
        {/* Description section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-white text-center text-xl mb-3 md:mb-10">
            I'm a web developer, with different interests like cloud
            technologies and learning languages. I'll be happy to help you to
            build up your website.
          </p>
          <p className="text-white text-center text-xl">
            I coursed 10 semesters in "Facultad de Ingeniería" of "Universidad
            Nacional Autónoma de México" and working on getting my degree. I've
            done different certifications and courses in different topics such
            as Web development, Azure Cloud and Data analysis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
