"use client";
import React from "react";
import { Tooltip } from 'react-tooltip'
import PageTransition from "@/components/PageTransition";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3, FaFigma, FaNodeJs, FaReact, FaStripe } from "react-icons/fa";
import { RiFirebaseLine, RiJavascriptLine, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiExpress, SiMongodb, SiShadcnui } from "react-icons/si";

const AboutPage = () => {
  const education = [
    {
      time: "2024",
      title: "MERN Stack Web Development",
      institute: "Programming Hero",
    },
    {
      time: "2023",
      title: "Master Git & GitHub",
      institute: "Udemy",
    },
    {
      time: "2023 - 2027",
      title: "B.Sc in CSE",
      institute: "Daffodil International University",
    },
    {
      time: "2019-2021",
      title: "Higher Secondary Certificate",
      institute: "Safiuddin Sarker Academy & College",
    },
  ];

  const skills = [
    { 
      name: "HTML 5",
      icon: <ImHtmlFive2 />,
    },
    { 
      name: "CSS 3",
      icon: <FaCss3 />,
    },
    { 
      name: "JavaScript",
      icon: <RiJavascriptLine />,
    },
    { 
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
    },
    { 
      name: "BootStrap",
      icon: <TbBrandBootstrap />,
    },
    { 
      name: "React.Js",
      icon: <FaReact />,
    },
    { 
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    { 
      name: "Express.Js",
      icon: <SiExpress />,
    },
    { 
      name: "Node.Js",
      icon: <FaNodeJs />,
    },
    { 
      name: "Next.Js",
      icon: <RiNextjsLine />,
    },
    { 
      name: "Firebase",
      icon: <RiFirebaseLine />,
    },
    // { 
    //   name: "Shadcn",
    //   icon: <SiShadcnui />,
    // },
    { 
      name: "Stripe",
      icon: <FaStripe />,
    },
    // { 
    //   name: "Figma",
    //   icon: <FaFigma />,
    // },

  ];

  return (
    <>
      {/* <PageTransition /> */}
      <div className="text-center md:mt-10 pb-6 space-y-12 lg:space-y-24">
        <div className="space-y-4">
          <h1 className="text-primary text-3xl font-semibold uppercase">
            About Me
          </h1>
          <p className=" mx-auto font-bold text-lg md:text-xl lg:px-20">
            I&#39;m Mohiuddin Monzil, a passionate Front-End Developer with
            expertise in ReactJS. Over the past 1 year, I&#39;ve honed my skills
            in creating interactive websites and single-page applications (SPAs)
            that prioritize user experience.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-primary text-3xl font-semibold uppercase">
            Education
          </h1>
          <p className=" mx-auto font-bold text-lg md:text-xl px-10 lg:px-20">
            Showcasing My Talents, Amplifying My Impact
          </p>
          {/* education  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 gap-y-14 pt-10">
            {education.map((edu, idx) => {
              return (
                <div
                  key={idx}
                  className={`${idx % 2 === 0 ? "md:text-right" : "md:text-left"} text-left `}
                >
                  <span className="w-fit text-lg font-semibold text-primary border-2 border-primary px-6 py-2 ">
                    {edu.time}
                  </span>
                  <h2 className="font-bold text-2xl pt-3">{edu.title}</h2>
                  <p className="font-semibold">{edu.institute}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-primary text-3xl font-semibold uppercase">
            Skill
          </h1>
          <p className=" mx-auto font-bold text-lg md:text-xl px-10 lg:px-20">
            Enhancing Proficiency, Delivering Quality Web Solutions
          </p>
          {/* skills  */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-auto gap-6 gap-y-14 pt-10 pb-24">
            {skills.map((skill, idx) => {
              return <div key={idx}  data-tooltip-id="my-tooltip" data-tooltip-content={skill.name} className="mx-auto shadow-md shadow-primary rounded-md w-24 h-24 flex items-center justify-center">
                <span
                 className="text-5xl hover:text-primary transition-all duration-300 ease-in cursor-pointer">{skill.icon}</span>
                <Tooltip id="my-tooltip" />
              </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
