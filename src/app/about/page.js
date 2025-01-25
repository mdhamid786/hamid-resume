"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../../public/images/profile/bgimg.jpeg";
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
              <h2 className="font-bold text-2xl">Md. Hamid Ali</h2>
              <p
                style={{ fontStyle: "italic", fontWeight: "bold" }}
                className="text-lg mb-4"
              >
                Full Stack Developer | MERN Stack Expert | Tech Innovator
              </p>
              <p className="font-medium text-justify">
                I’m a passionate and results-driven Full Stack Developer with{" "}
                <strong>2.6+ years</strong> of industry experience, specializing
                in crafting seamless digital solutions using the{" "}
                <strong>MERN stack</strong>. With a B.Tech in Computer Science
                Engineering, I bring a strong blend of technical expertise and
                creativity to every project I undertake.
              </p>

              <p className="font-medium my-4 text-justify">
                From building visually stunning and responsive user interfaces
                with <strong>React.js</strong> and <strong>Next.js</strong>, to
                designing robust server-side solutions with{" "}
                <strong>Node.js</strong> and <strong>Express.js</strong>, I
                thrive on delivering exceptional user experiences. My expertise
                in <strong>MongoDB</strong> and <strong>SQL</strong> ensures
                efficient and scalable database management.
              </p>
              <p className="font-medium text-justify">
                Driven by innovation and a constant urge to stay ahead of
                technology trends, I’m always excited to take on new challenges
                and turn ideas into impactful solutions. Let’s collaborate and
                create something extraordinary together!
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
                  <AnimatedNumbers value={2} />+
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
