"use client"
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";
import React from "react";
import BA from "../../../public/images/projects/ba.png";
import Arohan from "../../../public/images/projects/arohan.png";
import Sono from "../../../public/images/projects/sono.png";
import PDPL from "../../../public/images/projects/d2rtechweb.png";
import Shop from "../../../public/images/projects/shoppersbills.png";
// import D2R from "../../../public/images/projects/dertech.png";
import ECOM from "../../../public/images/projects/banner.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <>
      <article
        className=" w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
       lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      "
      >
        <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gray-500 rounded-br-3xl  dark:bg-light
         xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
        " />
        <Link
          href={link}
          target="_blank"
          className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage src={img} alt="img" className=" w-full h-auto"
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
          />
        </Link>

        <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
          <span className=" text-primary font-medium text-xl dark:text-purple-500 xs:text-base">{type}</span>
          <Link
            href={link}
            target="_blank"
            className=" hover:underline underline-offset-2"
          >
            <h2 className=" my-2 w-full dark:text-light text-left text-4xl font-bold sm:text-sm ">
              {title}
            </h2>
          </Link>
          <p className=" my-2 font-medium text-justify text-dark dark:text-light sm:text-sm"> {summary}</p>

          <div className=" mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>

            <Link
              href={link}
              target="_blank"
              className=" ml-4 rounded-lg bg-dark text-light   p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base "
            >
              Visit Projects
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article
      className=" w-full flex flex-col items-center justify-center rounded-2xl
     border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
     "
    >
        <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-gray-500 rounded-br-3xl dark:bg-light
          md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
         " />

      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt="img" className=" w-full h-auto"
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority 
          sizes="(max-width:768px) 100vw,
          (max-width:1200px) 50vw, 
          50vw
          "
         />
      </Link>

      <div className=" w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-primary font-medium text-xl dark:text-purple-500 lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <p className=" my-2 font-medium text-justify text-dark dark:text-light sm:text-sm"> {summary}</p>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Vercel Live
          </Link>
          <Link href={github} target="_blank" className="w-8  md:w-[6]">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <main className=" w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className=" mt-5">
          <AnimatedText text="Our Project Knowledge" className="mb-16 lg:lg:!text-7xl sm:!text-6xl xs:xs:!text-4xl" />
          <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className=" col-span-12">
              <FeaturedProject
                title="E-commerce Mern Stack"
                img={ECOM}
                summary="Welcome to our grocery store website! We are your one-stop shop for all your grocery needs,
                 offering a wide selection of fresh produce, meats, dairy products, pantry staples, and more. With
                  convenient online ordering and delivery options, we make it easy for you to stock up on all your
                   favorite items without ever leaving the comfort of your home. Whether you're planning a family meal, 
                   stocking up for the week, or just need a few essentials, we've got you covered. Thank you for choosing us 
                   as your go-to grocery store!"
                link="https://ecommerce-react-sandy.vercel.app/"
                github="https://ecommerce-react-sandy.vercel.app/"
                type="featured projects"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="Sono website"
                img={Sono}
                summary="Powered by Next.js and Firebase, 
                our dynamic platform seamlessly integrates real-time chat, archive sharing, and a secure archive system.
                 With Firebase ensuring authentication and a dynamic database,"
                link="https://sono-website.vercel.app/"
                github="https://github.com/hamidd2r/sono_website/tree/master"
                type="Firebase"
              />
            </div>

            <div className=" col-span-6  sm:col-span-12">
              <Project
                title="Beamazing Online"
                img={BA}
                summary="BAO offers custom mobile & web designing, and development services along with end-to-end digital marketing solutions to build awareness using technology in this website HTML CSS as well as Javascript"
                link="https://testing-web-navy.vercel.app/"
                github="https://testing-web-navy.vercel.app/"
                type="Static Website"
              />
            </div>

            <div className=" col-span-12">
              <FeaturedProject
                title="E-commerce Mern Stack"
                img={Shop}
                summary="Welcome ShoppersBill With Next.js providing frontend and a powerful Node.js API managing the backend,
                also use mongodb for handling data 
                our platform ensures a dynamic and convenient user experience. Easily add bills, bill transactions histroy,"
                link="http://3.133.136.199/"
                github="http://3.133.136.199/"
                type="featured projects"
              />
            </div>
            <div className=" col-span-6  sm:col-span-12">
              <Project
                title="Arohan"
                img={Arohan}
                summary="Explore the possibilities with our static website crafted using HTML, CSS, and JavaScript. We bring simplicity and elegance to the digital world."
                link="https://arohansolutions.com/"
                github="https://arohansolutions.com/"
                type="Static Website"
              />
            </div>

            <div className=" col-span-6  sm:col-span-12">
              <Project
                title="E-commerce Mern Stack"
                img={PDPL}
                summary="MERN (MongoDB, Express.js, React.js, Node.js) E-commerce website, a culmination of cutting-edge technologies to deliver a seamless shopping experience. With MongoDB ensuring efficient data management, Express.js powering a scalable backend, React.js creating dynamic front-end interfaces, and Node.js orchestrating backend operations,"
                link="https://d2-r-training.vercel.app/"
                github="https://d2-r-training.vercel.app/"
                type="Ecommerce Website"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;