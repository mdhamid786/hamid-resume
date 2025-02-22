"use client"
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Project1 from "../../../public/images/profile/myname.png";
import Project2 from "../../../public/images/profile/college1.jpg";
// import Project3 from "../../../public/images/profile/college2.jpg";
import Project4 from "../../../public/images/profile/certificate.png";
import app from "../../../public/images/profile/appdev.jpg";
import months from "../../../public/images/profile/6months.jpg";
import apptitude from "../../../public/images/profile/apptitude.jpg";


import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";


const FramerImage = motion(Image)

const MovingImage = ({title, img , link})=> {

const x = useMotionValue(0)
const y = useMotionValue(0)
const imgRef = useRef(null)


function handleMouse(event){
imgRef.current.style.display="inline-block"
x.set(event.pageX)
y.set(-10)
}

function handleMouseLeave(event){
    imgRef.current.style.display="none"
    x.set(0)
    y.set(0)  
}


    return (
      <>
        <Link href={link} target="_blank" 
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
        <h2 className=" capitalize text-xl font-semibold hover:underline">{title}</h2>
     </Link>
     <FramerImage style={{x:x, y:y}} whileInView={{opacity:1, transition:{duration:0.2}}} initial={{opacity:0}} ref={imgRef} src={img} alt={title} className=" z-10 w-96 h-auto hidden absolute rounded-lg"/>
      </>
    )
}

const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-gray-500 rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto max-h-60 object-cover" // Add max height and object-cover for better scaling
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};




const Articles = ({img , title, date , link}) => {
    return (
        <motion.li className=" relative w-full p-4 py-6 my-4 rounded-xl flex items-center
         justify-between bg-light dark:bg-dark text-dark first:mt-0 border border-solid border-dark dark:border-light dark:text-light
          sm:flex-col
        "
        initial={{y:200}}
        whileInView={{y:0 , transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        >
             <MovingImage title={title} img={img} link={link}/>
    
    
     <span className=" text-primary dark:text-purple-500 font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}


const page = () => {
  return (
    <>
   
      <main className=" w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Our journey "
            className="mb-16 lg:lg:!text-7xl sm:!text-6xl xs:xs:!text-4xl"
          />
          <ul className=" grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
          
                <FeatureArticle 
                title="When we are selected campus placement"
                summary="successful campus placement journey! 🌟 thanks #Arun datta sir"
                time="9 min read"
                link="/"
                img={Project1}
                />

           <FeatureArticle 
                title="Grateful and Honored to Receive the Netsmart infotech placement Award 🏆"
                summary="Thank you to the incredible collage and our visionary director for this recognition. #LKCE Collage"
                time="9 min read"
                link="/"
                img={Project2}
                />


                
<FeatureArticle 
                title="I have completed 6 months internship  🏆"
                summary="I successfully completed a dynamic 6-month internship at Solitaire Infosys in Mohali, where I gained hands-on experience"
                time="9 min read"
                link="/"
                img={months}
                />

<FeatureArticle 
                title="I have completed 6 weeks training  🏆"
                summary="I successfully completed a dynamic 6-weeks training at internshala where i learn about mobile app developement"
                time="9 min read"
                link="/"
                img={app}
                />


                
           <FeatureArticle 
                title="I have completed 15 days full stack bootcamp"
                summary="Learn about codding cleaning andd setup project..."
                time="9 min read"
                link="/"
                img={Project4}
                />

<FeatureArticle 
                title="I have completed 30 hours apptitude skills"
                summary="I have completed 30 hours apptitude skills online mode"
                time="9 min read"
                link="/"
                img={apptitude}
                />
          
          </ul>

          <h2 className=" font-bold text-4xl w-full text-center my-6 mt-5 ">All </h2>

          <ul>
            <Articles 
            title=" Write each line of code multiple times."
            date="24-12-2024"
            link="/"
            img={Project1}
           
            />
             <Articles 
            title=" Practice code in different environments"
            date="24-12-2024"
            link="/"
            img={Project1}
           
            />

<Articles 
            title="Contribute to the open-source community."
            date="24-12-2024"
            link="/"
            img={Project1}
           
            />


<Articles 
            title="Rewrite your code when you learn something new. ..."
            date="24-12-2024"
            link="/"
            img={Project1}
           
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default page;
