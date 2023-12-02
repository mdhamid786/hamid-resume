"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Listicon from "./Listicon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-9 first:last:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[75%]]"
    >
      <Listicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75  md:text-sm">
          {time} | {place}
        </span>
        <p className=" font-medium w-full text-justify  md:text-sm">{info}</p>
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
        <h2 className=" font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>
        <div ref={ref} className=" w-[75%] mx-auto relative lg:w-[90%] md:w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute left-8 top-9 w-[4px] h-full bg-dark origin-top  dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]
            "
          ></motion.div>

          <ul className=" w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <li>
              <Details
                type=" Bachelor of Technology in Computer Science"
                time="2018-2022"
                place="jalandhar city , punjab"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence. "
              />

              <Details
                type=" Senior Secondary (Class-XII Science)"
                time="2016-2018"
                place="Darbhanga city , Bihar"
                info="includes topics such as number systems, algebra, geometry, trigonometry, mensuration, and statistics."
              />

              <Details
                type="Secondary (Class-X)"
                time="2018-2022"
                place="Maunbehat  , Bihar"
                info="Secondary school students learn a variety of core subjects and electives. 
                The National Curriculum specifies which subjects are taught in secondary schools. These include: Mathematics, Science, English, History, Geography"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
