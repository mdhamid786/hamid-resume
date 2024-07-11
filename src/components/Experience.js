"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Listicon from "./Listicon";


const Details = ({ position, company, companyLink, time, address, work,work1,work2,work3,work4,work5,work6, work7, work8 }) => {
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
        <p className=" font-medium w-full text-justify md:text-sm">{work1}</p>
        <p className=" font-medium w-full text-justify md:text-sm">{work2}</p>
        <p className=" font-medium w-full text-justify md:text-sm">{work3}</p>
        <p className=" font-medium w-full text-justify md:text-sm">{work4}</p>
        <p className=" font-medium w-full text-justify md:text-sm">{work5}</p>
        <p className=" font-medium w-full text-justify md:text-sm">{work6}</p>
        <p className=" font-medium w-full text-justify md:text-sm">{work7}</p>
        <p className=" font-medium w-full text-justify md:text-sm">{work8}</p>
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
                work=" * Developing and designing front end web architecture"
                work1=" * Define code architecture decisions to support high-performance products "
                work2=" * Experience creating RESTfull services with NodeJs "
                work3=" * Knowledge of Modern frameworks and design patterns "
                work4=" * Translate wireframes and PSD Designs into functional web applications "
                work5=" *  Developing well-functioning databases and applications"
                work6=" *  Work with development teams and managers to ideate software solutions"
                work7=" * Conduct and participate in project planning & scheduling and design discussions "
                work8=" * Test software to ensure efficiency Address and improve any technical issues "


              />

              <Details
                position="MERN Stack Intern"
                company="Solitaire Infosys"
                companyLink="https://www.solitaireinfosystems.com/"
                time="March-2022 | Aug-2022"
                address="Sahibzada Ajit Singh Nagar, Punjab"
                work=" * Completed internship at Solitaire Infosys, focusing on MERN Stack development"
                work1=" * Learned JavaScript, HTML, CSS, and MERN framework (MongoDB, Express.js, React.js, Node.js)"
                work2=" * Honed skills in both frontend and backend development "
                work3=" *  Worked with cutting-edge technologies to create dynamic web applications "
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
