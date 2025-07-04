"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../../public/images/profile/profileImage.jpg";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-6">
          <AnimatedText
            text="Turning Ideas Into Reality"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        <div className="col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
  <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
    About Me
  </h2>
  <h2 className="font-bold text-2xl text-dark dark:text-light">Md. Hamid Ali</h2>
  <p className="italic font-medium text-primary mb-4">
    Full Stack Engineer · MERN Stack · DevOps Aware · Team Leader
  </p>

  <p className="font-medium text-justify text-gray-700 dark:text-gray-300 mb-4">
    I am a performance-driven full stack engineer with <span className="font-semibold">3+ years</span> of experience in building robust, scalable applications. My expertise spans both frontend and backend development using the <span className="font-semibold">MERN stack</span>.
  </p>

  <p className="font-medium text-justify text-gray-700 dark:text-gray-300 mb-4">
    I design clean, responsive UIs with <span className="text-dark dark:text-light font-medium">React.js</span> and <span className="text-dark dark:text-light font-medium">Next.js</span>, and develop efficient server-side APIs using <span className="text-dark dark:text-light font-medium">Node.js</span> and <span className="text-dark dark:text-light font-medium">Express.js</span>. I also have hands-on experience with both <span className="text-dark dark:text-light font-medium">MongoDB</span> and <span className="text-dark dark:text-light font-medium">SQL</span> for flexible data modeling.
  </p>

  <p className="font-medium text-justify text-gray-700 dark:text-gray-300 mb-4">
    In addition to coding, I manage <span className="font-medium">CI/CD pipelines</span>, deploy on cloud platforms like <span className="font-medium">AWS</span>, <span className="font-medium">Vercel</span>, and <span className="font-medium">DigitalOcean</span>, and handle <span className="font-medium">Nginx configurations</span> for production-ready systems.
  </p>

  <p className="font-medium text-justify text-gray-700 dark:text-gray-300">
    I also lead and mentor junior developers, ensuring smooth team collaboration and continuous learning. I love solving real-world problems and turning innovative ideas into impactful, user-friendly applications.
  </p>
</div>


            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                style={{ borderRadius: "50%" }}
                src={profilePic}
                alt="profile"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              ></Image>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  MERN Projects
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
};

export default about;
