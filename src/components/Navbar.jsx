"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      path: "https://github.com/Mh-Monzil",
    },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/mhmonzil/",
    },
    {
      icon: <FaFacebook />,
      path: "/",
    },
  ];

  return (
    <header className="w-full mx-auto sticky top-0 z-30 bg-dark px-6 py-4 lg:py-6 xl:px-0 font-semibold flex items-center justify-between">
      {/* logo  */}
      <Logo />

      {/* desktop nav starts */}
      {/* route */}
      <nav className="hidden lg:flex">
        {navLinks.map((link) => (
          <Link
            href={`${link.path}`}
            key={link.name}
            className="mx-4 relative group"
          >
            {link.name}
            <span
              className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-1 group-hover:w-full transition-all ease-in duration-300 ${
                pathname === link.path ? "w-full" : "w-0"
              }`}
            >
              
            </span>
          </Link>
        ))}
      </nav>

      {/* social links  */}
      <nav className="hidden lg:flex items-center gap-4 text-3xl">
        {socialLinks.map((social) => (
          <Link
            href={`${social.path}`}
            key={social.path}
            target="_blank"

            className="border-b-2 border-primary pb-1 rounded-lg hover:mb-2 transition-all duration-300"
          >
            {social.icon}
          </Link>
        ))}
      </nav>
      {/* desktop nav ends */}

      {/* sidebar  */}
      <div className="flex lg:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <TfiMenuAlt className="text-3xl cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-20">
            <Logo />
            {/* route  */}
            <div className="flex flex-col gap-5 ">
              {navLinks.map((link) => (
                <Link
                  href={`${link.path}`}
                  key={link.name}
                  className="mx-auto relative group font-semibold text-2xl"
                >
                  {link.name}
                  <span
                    className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-1 group-hover:w-full transition-all ease-in duration-300 ${
                      pathname === link.path ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* social links  */}
            <nav className="flex lg:hidden items-center justify-center gap-4 text-3xl">
              {socialLinks.map((social) => (
                <motion.a
                  href={`${social.path}`}
                  key={social.path}
                  target="_blank"
                  whileHover={{ y: [0, -5, 0] }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="border-b-2 border-primary pb-1 rounded-lg "
                >
                  {social.icon}
                </motion.a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
