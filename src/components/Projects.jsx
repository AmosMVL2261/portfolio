import React from "react";
import {
  movies_website,
  etch_a_sketch,
  bank_website,
  External_link,
  github_logo,
} from "../assets";

function ProjectCard({ image, name, github, page }) {
  return (
    <div className="py-3 h-[320px] w-[350px] flex flex-col justify-between items-center">
      {/* Image */}
      <div className="">
        <img
          className="rounded-lg h-[220px] w-[350px]"
          src={image}
          alt={name}
        />
      </div>
      {/* Page Name */}
      <div className="text-white text-xl font-bold">
        <p>{name}</p>
      </div>
      {/* Page Links */}
      <div className="flex flex-row gap-5">
        <a href={github} target="_blank">
          <img
            className="h-[32px] w-[32px]"
            src={github_logo}
            alt="Github Repository"
          />
        </a>
        <a href={page} target="_blank">
          <img
            className="h-[32px] w-[32px] object-fill"
            src={External_link}
            alt="External Page link"
          />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-2">
      <h2 className="text-5xl mb-10 text-white font-bold text-center">
        Projects
      </h2>
      {/* Project cards */}
      <div className="flex flex-row justify-around items-center flex-wrap gap-y-10 gap-x-5">
        <ProjectCard
          image={movies_website}
          name="Movies Website"
          github="https://github.com/AmosMVL2261/movies-website"
          page="https://movies-website-xi.vercel.app/"
        />
        <ProjectCard
          image={bank_website}
          name="Bank Website"
          github="https://github.com/AmosMVL2261/bank_modern_app"
          page="https://bank-modern-app-olive.vercel.app/"
        />
        <ProjectCard
          image={etch_a_sketch}
          name="Etch-a-sketch"
          github="https://github.com/AmosMVL2261/etch-a-sketch"
          page="https://amosmvl2261.github.io/etch-a-sketch/"
        />
      </div>
    </section>
  );
}

export default Projects;
