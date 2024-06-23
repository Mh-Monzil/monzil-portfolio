"use client";
import Image from "next/image";
import React from "react";
import project1 from "../../../public/projects/projects-1.png";
import project2 from "../../../public/projects/projects-2.png";
import project3 from "../../../public/projects/projects-3.png";
import project4 from "../../../public/projects/projects-4.png";
import project5 from "../../../public/projects/projects-5.png";
import project6 from "../../../public/projects/projects-6.png";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const ProjectPage = () => {
  const projects = [
    {
      name: "ScholarVista",
      img: project1,
      technologies: [
        "React",
        "Tailwind CSS",
        "TanStackQuery",
        "MongoDB",
        "ExpressJS",
        "Firebase",
      ],
      description:
        "ScholarVista is a user-friendly apply-scholarship website that helps users to apply for their desired scholarship.",
      github: "https://github.com/Mh-Monzil/scholarVista",
      liveLink: "https://my-project-2f30d.web.app/",
    },
    {
      name: "ResiRealty",
      img: project2,
      technologies: ["React", "Tailwind CSS", "Firebase", "AOS", "SwiperJS"],
      description:
        "ResiRealty is a website where user can see his desired resident and their information.",
        github: "https://github.com/Mh-Monzil/resiRealty",
        liveLink: "https://resirealty-auth.web.app/",
    },
    {
      name: "AltChoice",
      img: project3,
      technologies: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "ExpressJS",
      ],
      description:
        "AltChoice is alternative product system website where user can post their query and get recommendation to find the alternative product",
        github: "https://github.com/Mh-Monzil/altChoice",
        liveLink: "https://alt-choice.web.app/",
    },
    {
      name: "Monzil's Portfolio",
      img: project5,
      technologies: [
        "NextJS",
        "React",
        "Tailwind CSS",
        "Shadcn",
        "Framer Motion",
      ],
      description:
        "A Developer Portfolio which is made of latest version of NextJS and used framer-motion for awesome animation.",
        github: "https://github.com/Mh-Monzil/monzil-portfolio",
        liveLink: "https://monzil-portfolio.vercel.app/",
    },
    {
      name: "DrawDive",
      img: project4,
      technologies: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "ExpressJS",
      ],
      description:
        "DrawDive is a platform where user can buy & sell their own art & craft items",
        github: "https://github.com/Mh-Monzil/drawDive",
        liveLink: "https://draw-dive.web.app/",
    },
    {
      name: "Recipe Calories",
      img: project6,
      technologies: ["React", "Tailwind CSS", "JavaScript", "npm"],
      description:
        "Recipe Calories is a custom cooking food adventure. Where user can add their recipe so that another user can watch these recipe and try out.",
        github: "https://github.com/Mh-Monzil/recipeCalories",
        liveLink: "https://delicious-recipeeee.netlify.app/"
    },
  ];

  return (
    <div className="text-center space-y-5 md:space-y-8 md:mt-10 pb-6">
      <h1 className="text-primary text-3xl font-semibold uppercase">
        Projects
      </h1>
      <p className="max-w-3xl mx-auto font-bold text-xl md:text-2xl">
        I develop responsive static websites, convert designs into code, and
        construct dynamic single-page applications
      </p>

      {/* projects card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="max-w-96 mx-auto text-left border border-primary/50 rounded-2xl mt-6 overflow-hidden hover:shadow-md hover:shadow-primary transition-all duration-300"
            >
              <Image
                src={project.img}
                alt=""
                priority
                className=" w-full hover:scale-105 transition-all duration-300"
              />
              <div className="p-6 space-y-3 ">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <ul className="flex flex-wrap gap-x-2 gap-y-1">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-[12px] bg-gray-800 text-primary font-semibold rounded-md px-2 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="font-medium py-2 border-t border-gray-600">
                  {project.description}
                </p>
                <div className="flex items-center justify-end gap-3 ">
                  <Link
                    href={`${project.liveLink}`}
                    target="_blank"
                    data-tooltip-id="live"
                    data-tooltip-content="Live-Link"
                  >
                    <FiExternalLink className="text-3xl" />
                    <Tooltip id="live" />
                  </Link>
                  <Link
                    href={`${project.github}`}
                    target="_blank"
                    data-tooltip-id="github"
                    data-tooltip-content="GitHub"
                  >
                    <FiGithub className="text-3xl" />
                    <Tooltip id="github" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
