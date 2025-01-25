"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Listicon from "./Listicon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-9 first:last:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[75%]]"
    >
      <Listicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 md:text-sm">
          {time} | {place}
        </span>
        <p className="w-full text-justify md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Education
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-8 top-9 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]"
          ></motion.div>

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="Bachelor of Technology in Computer Science and Engineering"
              time="2018-2022"
              place="Lyallpur Khalsa College of Engineering, Jalandhar, Punjab"
              info="Specialized in Full Stack Development with relevant courses including Data Structures and Algorithms, Web Development, Database Management Systems, and Artificial Intelligence."
            />

            <Details
              type="Senior Secondary (Class-XII Science)"
              time="2016-2018"
              place="Darbhanga City, Bihar"
              info="Focused on core science subjects such as Physics, Chemistry, Mathematics, and Computer Science. Built a strong foundation in problem-solving and analytical thinking."
            />

            <Details
              type="Secondary (Class-X)"
              time="2014-2016"
              place="Maunbehat, Bihar"
              info="Completed foundational studies with subjects including Mathematics, Science, English, and Social Studies. Developed early technical and academic skills."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
