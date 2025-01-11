"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import BA from "../../../public/images/projects/ba.png";
import Arohan from "../../../public/images/projects/arohan.png";
import Sono from "../../../public/images/projects/sono.png";
import cs from "../../../public/12.jpg";
import logica from "../../../public/images/coming.jpg";
import PDPL from "../../../public/images/projects/mu.png";
import world from "../../../public/images/projects/world.png";
import Shop from "../../../public/images/projects/shoppersbills.png";
// import D2R from "../../../public/images/projects/dertech.png";
import ECOM from "../../../public/images/projects/banner.jpg";
import tapir from "../../../public/images/projects/tapir.png";
import yd from "../../../public/images/yd.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, tech }) => {
  return (
    <>
      <article
        className=" w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
       lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      "
      >
        <div
          className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gray-500 rounded-br-3xl  dark:bg-light
         xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
        "
        />
        <Link
          href={link}
          target="_blank"
          className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            src={img}
            alt="img"
            className=" w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
          <span className=" text-primary font-medium text-xl dark:text-purple-500 xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className=" hover:underline underline-offset-2"
          >
            <h2 className=" my-2 w-full dark:text-light text-left text-4xl font-bold sm:text-sm ">
              {title}
            </h2>
          </Link>
          <p className=" my-2 font-medium text-justify text-dark dark:text-light sm:text-sm">
            {" "}
            {summary}
          </p>
          <p className=" my-2 font-medium text-justify text-dark dark:text-light sm:text-sm">
            {" "}
            {tech}
          </p>

          <div className=" mt-2 flex items-center">
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

const Project = ({ title, type, img, link, summary, tech }) => {
  return (
    <article
      className=" w-full flex flex-col items-center justify-center rounded-2xl
     border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
     "
    >
      <div
        className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-gray-500 rounded-br-3xl dark:bg-light
          md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
         "
      />

      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="img"
          className=" w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
          (max-width:1200px) 50vw, 
          50vw
          "
        />
      </Link>

      <div className=" w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-primary font-medium text-xl dark:text-purple-500 lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <p className=" my-2 font-medium text-justify text-dark dark:text-light sm:text-sm">
          {" "}
          {summary}
        </p>

        <p className=" my-2 font-medium text-justify text-dark dark:text-light sm:text-sm">
          {" "}
          {tech}
        </p>

        <div className=" w-full mt-2 flex items-center justify-between">
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
  );
};

const page = () => {
  return (
    <>
<main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
  <Layout className="mt-5">
    <AnimatedText
      text="Our Project Knowledge"
      className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
    />
    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
      {/* Logica Portal - B2C Platform */}
      <div className="col-span-12">
        <FeaturedProject
          title="Logica Portal B2C Platform"
          img={logica}
          summary="Developed a high-performance B2C platform using Next.js and Node.js, optimized for speed and scalability. Integrated secure payment gateways and implemented a dynamic product recommendation system leveraging MongoDB for personalized shopping experiences."
          link="https://emaavi.vercel.app/"
          type="B2C Platform"
          tech="Technologies used: Next.js, MongoDB, Node.js, Express.js, Redux, Secure Payment Integration"
        />
      </div>

      {/* Yo Digitals Ecommerce */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title="Yo Digitals Ecommerce"
          img={yd}
          summary="Engineered a hybrid B2B/B2C ecommerce platform using Next.js, PostgreSQL, and Node.js. Developed a robust order management system that supports high concurrency, ensuring seamless transactions. Applied performance optimization techniques, including lazy loading and server-side rendering (SSR)."
          tech="Technologies used: Next.js, Node.js, PostgreSQL, TailwindCSS, Server-side Rendering (SSR), Lazy Loading"
          link="https://shop.yodigitals.com/"
          type="Ecommerce Platform"
        />
      </div>

      {/* Logica Portal Admin Dashboard */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title="Logica Portal Admin Dashboard"
          img={logica}
          summary="Designed and developed an advanced admin dashboard that enables B2B transaction management with multi-layered categories, dynamic pricing, and real-time inventory tracking. Implemented role-based access control (RBAC) for secure user management and optimized for mobile and desktop views."
          link="https://logica-portal.vercel.app/"
          type="Admin Dashboard"
          tech="Technologies used: Next.js, MongoDB, Node.js, Express.js, Redux, Role-based Access Control (RBAC), Real-time Inventory"
        />
      </div>

      {/* Doctor Management Platform */}
      <div className="col-span-12">
        <FeaturedProject
          title="Doctor Management Platform"
          img={cs}
          summary="Built a highly scalable and secure case management platform using Next.js and MongoDB. Enabled real-time case updates, secure data sharing, and integrated live chat and video calls, ensuring that doctors and patients can communicate efficiently."
          link=""
          type="Healthcare Platform"
          tech="Technologies used: Next.js, MongoDB, Node.js, Express.js, Redux, Real-time Chat, Video Integration"
        />
      </div>

      {/* Full-stack E-commerce Website */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title="E-commerce Website"
          img={ECOM}
          summary="Developed a full-stack grocery store website using Next.js, Redux, and Bootstrap. Implemented cart management, dynamic product catalog, and user authentication with JWT. Optimized for speed, ensuring fast loading times and smooth user experience across all devices."
          tech="Technologies used: Next.js, Bootstrap, Redux, JWT Authentication, Performance Optimization"
          link="https://ecommerce-react-sandy.vercel.app/"
          type="Ecommerce Platform"
        />
      </div>

      {/* Tapir Software Recharge */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title="Tapir Software Recharge"
          img={tapir}
          summary="Built a comprehensive recharge and payment platform with real-time transaction processing and integration with multiple payment gateways. Focused on minimizing transaction time by optimizing the back-end with Node.js, ensuring scalability for future growth."
          tech="Technologies used: Next.js, Node.js, SQL, TailwindCSS, Payment Gateway Integration, Real-time Transactions"
          link="http://tapir.co.in/"
          type="Recharge Platform"
        />
      </div>

      {/* ShoppersBill MERN Stack */}
      <div className="col-span-12">
        <FeaturedProject
          title="ShoppersBill MERN Stack"
          img={Shop}
          summary="Created a dynamic bill management system using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform includes real-time transaction history, seamless bill uploads, and user-specific dashboards. Optimized the application for scalability and high availability."
          link="https://shoppers-bill-user.vercel.app"
          type="Bill Management System"
          tech="Technologies used: Next.js, Node.js, MongoDB, Redux, Real-time Data Handling, Scalable Architecture"
        />
      </div>

      {/* Admin Panel */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title="ShoppersBill Admin Panel"
          img={Shop}
          summary="Developed a comprehensive admin panel for managing bills, transactions, and user data, ensuring a seamless user experience and easy navigation. Integrated with a secure authentication system and role-based access control for various admin levels."
          link="https://shoppers-admin.vercel.app/login"
          type="Admin Panel"
          tech="Technologies used: Next.js, Node.js, MongoDB, Redux, Role-based Access Control (RBAC), Secure Authentication"
        />
      </div>

      {/* MUN Project */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title="MUN Project"
          img={PDPL}
          summary="Developed a modern web application for Model United Nations (MUN) events, utilizing the MERN stack for efficient data management, event scheduling, and participant communication. Integrated real-time notifications and live updates."
          link="https://mun-five.vercel.app/"
          type="Event Management"
          tech="Technologies used: MongoDB, Express.js, React.js, Node.js, Real-time Notifications"
        />
      </div>

      <div className=" col-span-6 sm:col-span-12">
  <Project
    title="World Map Project"
    img={world}
    summary="Utilize React with mapping libraries such as React-Leaflet or React-Simple-Maps to showcase a world map, integrating markers to highlight desired locations."
    link="https://worldmap-snowy.vercel.app/"
    type="Geospatial Visualization"
  />
</div>

    </div>
  </Layout>
</main>


    </>
  );
};

export default page;
