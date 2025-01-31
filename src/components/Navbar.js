"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  Vercel,
  Youtube
  
} from "./icons";
import useThemesSwicher from "./hooks/useThemesSwicher";

const Navbar = () => {
  const [mode, setMode] = useThemesSwicher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`
                h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light
                `}
        >
          &nbsp;
        </span>
      </Link>
    );
  };


  // mobile
  const CustomMobileLink = ({ href, title, className = ""  ,toggle}) => {

    const handleClick = () => {
      toggle()
      router.push(href)
    }
    return (
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
        {title}
        <span
          className={`
                h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark
                `}
        >
          &nbsp;
        </span>
      </button>
    );
  };
  return (
    <>
      <header className=" w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light  relative z-10 lg:px-16 md:px-12 sm:pz-8">
        <button
          className="  flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
              isOpen ? "rotate-45 translate-y-1" : "-traslate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
              isOpen ? "-rotate-45 -translate-y-1" : "traslate-y-0.5"
            }`}
          ></span>
        </button>

      <div className=" w-full flex justify-between items-center lg:hidden">
      <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mr-4" />
          <CustomLink href="/projects" title="Projects" className="mr-4" />
          <CustomLink href="/articles" title="Certificate" className="ml-4" />
          <CustomLink href="/demo" title="Project Demo" className="ml-4" />

        </nav>

        <nav className=" flex items-center justify-center flex-wrap">
         

          <motion.a
            href="https://github.com/mdhamid786"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mdhamidali1"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@HamidExplore"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3 mr-12"
          >
            <Youtube />
          </motion.a>


         

          <button
            className={`ml-3 flex items-start justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>



      {/* mobile view  */}

     {
      isOpen ? 
      <div
      initial={{scale:0}}
      animate={{scale:1 , opacity:0 , x:-"-50%" , y:"-50%"}}
       className=" min-w-[70vw] flex flex-col z-30 justify-between items-center
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
       bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
      ">
     <nav className="flex flex-col items-center justify-center">
         <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}  />
         <CustomMobileLink href="/about" title="About" className=""  toggle={handleClick} />
         <CustomMobileLink href="/projects" title="Projects" className=""  toggle={handleClick} />
         <CustomMobileLink href="/articles" title="Certificate" className=""  toggle={handleClick} />
         <CustomMobileLink href="/demo" title="Project Demo" className=""  toggle={handleClick} />
       </nav>

       <nav className=" flex items-center justify-center flex-wrap mt-2">
         <motion.a
           href="/"
         
           whileHover={{ y: -2 }}
           whileTap={{ scale: 0.9 }}
           className=" w-6 mx-3 sm:mx-1"
         >
         </motion.a>

         <motion.a
           href="/"
           target="_blank"
           whileHover={{ y: -2 }}
           whileTap={{ scale: 0.9 }}
           className=" w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
         >
           <GithubIcon />
         </motion.a>

         <motion.a
           href="www.linkedin.com/in/mdhamidali1"
           target="_blank"
           whileHover={{ y: -2 }}
           whileTap={{ scale: 0.9 }}
           className=" w-6 mx-3 sm:mx-1"
         >
           <LinkedInIcon />
         </motion.a>

         <motion.a
           href="/"
           target="_blank"
           whileHover={{ y: -2 }}
           whileTap={{ scale: 0.9 }}
           className=" w-6 ml-3 sm:mx-1"
         >
           <DribbbleIcon />
         </motion.a>
         

         <button
           className={`ml-3 flex items-start justify-center rounded-full p-1 ${
             mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
           }`}
           onClick={() => setMode(mode === "light" ? "dark" : "light")}
         >
           {mode === "dark" ? (
             <SunIcon className={"fill-dark"} />
           ) : (
             <MoonIcon className={"fill-dark"} />
           )}
         </button>
       </nav>
     </div>

      : null

     }
        <div className=" absolute left-[50%] top-2 translate-x-[50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;
