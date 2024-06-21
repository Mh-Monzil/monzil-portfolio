"use client";
import Image from "next/image";
import profilePic3 from "../../public/mz-pro.png";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { RiContractLine } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTransition from "@/components/PageTransition";
AOS.init();
import { easeInOut, motion } from "framer-motion";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <PageTransition />
      <main className="flex min-h-[80vh] flex-col items-center justify-center font-bold ">
        <div className=" flex flex-col items-center justify-center md:flex-row gap-8 lg:gap-20 w-full h-full pt-6 xl:pt-8 xl:pb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.4, ease: easeInOut },
            }}
            className="md:w-1/2 px-8"
          >
            <Image
              src={profilePic3}
              alt="Monzil"
              className="w-auto xl:h-[550px] rounded-full shadow-md shadow-primary"
            />
          </motion.div>
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-xl lg:text-2xl h-12">
              Junior
              <Typewriter
                words={[" Frontend Developer", " Web Developer"]}
                loop={true}
                cursor
                cursorStyle="__"
                cursorColor="#55E6A5"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </p>
            <h1
              className="font-bold text-4xl md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              Hello I&#39m <br />
              <span className="text-primary">Mohiuddin Monzil</span>
            </h1>
            <p className="font-medium text-lg max-w-[600px]">
              Transforming creative ideas into functional web experiences.
              Driven by a passion for coding and a commitment to continuous
              learning.
            </p>
            <div className="pt-4 flex justify-center md:justify-start gap-4">
              <Link
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                href="/resume.pdf"
                target="_blank"
                download={true}
                className="bg-transparent border-2 border-primary text-white text-lg font-semibold lg:font-bold p-2.5 lg:px-6 flex items-center gap-3 w-fit rounded-md hover:bg-primary hover:text-dark transition-all ease-in-out duration-300"
              >
                Resume <FiExternalLink className="text-3xl" />
              </Link>
              <Link
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                href="/contact"
                className="bg-primary border-2 border-primary text-dark text-lg font-semibold lg:font-bold p-2.5 lg::px-6 flex items-center gap-3 w-fit rounded-md hover:bg-transparent hover:text-white transition-all ease-in-out duration-300 "
              >
                Hire Me
                <RiContractLine className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        <Stats />
      </main>
    </>
  );
}
