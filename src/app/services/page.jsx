"use client";
import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiHtmlacademy } from "react-icons/si";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTransition from "@/components/PageTransition";

const ServicesPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init();
    }
  }, []);

  const cards = [
    {
      icon: <SiHtmlacademy />,
      title: "Static Website Development",
      description:
        "This service is perfect for small businesses, personal portfolios, and informational websites that do not need dynamic content. These sites are straightforward, quick, and secure",
    },
    {
      icon: <HiOutlineCodeBracket />,
      title: "Converting Designs to Code",
      description:
        "Many customers possess design files but lack the coding abilities needed to transform these designs into functional websites. This service helps bridge that particular gap",
    },
    {
      icon: <FaReact />,
      title: "Single Page Application (SPA)",
      description:
        "SPAs offer a more app-like experience on the web, ideal for applications needing frequent user interaction and dynamic content updates",
    },
  ];

  return (
    <>
    <PageTransition />
    <div className="text-center space-y-5 md:space-y-8 md:mt-20 pb-6">
      <h1 className="text-primary text-3xl font-semibold uppercase">My Service</h1>
      <p className="max-w-3xl mx-auto font-bold text-xl md:text-2xl">
        I develop responsive static websites, convert designs into code, and
        construct dynamic single-page applications
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 pt-16">
        {cards.map((card, idx) => {
          return (
            <div key={idx} data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out">
              <div
                className="relative max-w-96 h-full mx-auto px-4 py-8 md:px-6 lg:p-8 border-2 border-gray-800 hover:border-primary transition-all duration-300"
                
              >
                <p className="absolute -top-8 left-6 text-primary text-6xl bg-dark px-2">
                  {card.icon}
                </p>
                <p className="text-xl font-semibold pt-6 pb-4">{card.title}</p>
                <p className="font-medium text-gray-400 text-balance">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default ServicesPage;
