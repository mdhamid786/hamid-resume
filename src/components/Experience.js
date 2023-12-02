"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Listicon from "./Listicon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-9 first:last:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[75%]] "
    >
      <Listicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary capitalize dark:text-purple-500"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {address}
        </span>
        <p className=" font-medium w-full text-justify md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-5">
        <h2 className=" font-bold text-8xl mt-12 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>
        <div ref={ref} className=" w-[75%] mx-auto relative lg:w-[90%] md:w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
             md:w-[2px] md:left-[30px] xs:left-[20px]
             "
          ></motion.div>

          <ul className=" w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
            <li>
              <Details
                position="Software Engineer"
                company="D2RTECH"
                companyLink="d2rtech.com"
                time=" Sep - 2022-Present"
                address="Badshapur plus office Gurugram"
                work="Working as a MERN Stack Developer at D2RTECH, I am responsible for the design, development, and maintenance of web applications using the MERN technology stack.  
                "
              />

              <Details
                position="MERN Stack Intern"
                company="Solitaire Infosys"
                companyLink="https://www.solitaireinfosystems.com/"
                time="March-2022 | Aug-2022"
                address="Sahibzada Ajit Singh Nagar, Punjab"
                work="As a MERN (MongoDB, Express.js, React.js, Node.js) stack intern, I have gained valuable experience in web development using these technologies.
                 My proficiency spans MongoDB for data storage, Express.js for server-side development, React.js for building dynamic user interfaces, and Node.js for
                  backend server operations. Additionally, I have acquired in-depth knowledge of HTML, CSS, and JavaScript, enhancing my skills in crafting engaging and
                   interactive web experiences."
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
