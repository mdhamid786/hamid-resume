// "use client"
// import AnimatedText from "@/components/AnimatedText";
// import Layout from "@/components/Layout";
// import profilePic from "../../../public/images/profile/bgimg.jpeg";
// import Head from "next/head";
// import React, { useEffect, useRef } from "react";
// import Skills from "@/components/Skills";
// import Image from "next/image";
// import { useInView, useMotionValue, useSpring } from "framer-motion";
// import Experience from "@/components/Experience";
// import Education from "@/components/Education";



// const AnimatedNumbers = ({value}) =>{

//   const ref = useRef(null);
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue , {duration:3000})
//   const isInView = useInView(ref , {once:true});

//   useEffect(()=> {
//     if(isInView) {
//       motionValue.set(value)
//     }
//   },[isInView , value , motionValue])


  
// useEffect(()=>{

//   springValue.on("change" , (latest) => {
//     if(ref.current && latest.toFixed(0)<= value) {
//       ref.current.textContent = latest.toFixed(0)
//     }
//   })
// },[springValue, value])


//   return <span ref={ref}></span>

// }





// const about = () => {
//   return (
//     <>
//       <main className="flex w-full flex-col items-center justify-center dark:text-light">
//         <Layout className="pt-6">
//           <AnimatedText text="Md Hamid Ali !" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
//           <div className=" grid w-full grid-cols-8 gap-16 sm:gap-8 ">
//             <div className=" col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
//               <h2 className=" mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
//                 Biography
//               </h2>
//               <p className=" font-medium text-justify">
//                 {/* Hi, I'm Md Hamid Ali, a full stack developer with a
//                 passion for creating beautiful, functional, and user-centered
//                 digital experiences.  With 1+ years of experience in the field. I
//                 am always looking for new and innovative ways to bring my
//                 clients' visions to life. */}
//                 Hello, I'm Md Hamid Ali, a proficient MERN Stack Developer dedicated to building robust and dynamic web applications.
//                  With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I have over 1.5+ years of hands-on experience in this field.
//               </p>

//               <p className=" font-medium my-4 text-justify">
//                 {/* I believe that design is about more than just making things look
//                 pretty – it's about solving problems and creating intuitive,
//                 enjoyable experiences for users. */}
//                 My journey in the MERN stack has been marked by a commitment to excellence in both frontend and backend development. 
//                 From crafting seamless user interfaces with React to implementing scalable server-side solutions with Node.js, I thrive on transforming ideas into functional, user-friendly digital experiences.
//               </p>
//               <p className=" font-medium text-justify">
              
//                 passion for innovation and staying at the forefront of technology, I'm always eager to tackle new challenges.
//                  Let's collaborate and turn your web development aspirations into reality!
//               </p>

//               {/* <p className=" font-medium text-justify">
//                 Whether I'm working on a website, or other digital
//                 product, I bring my commitment to design excellence and
//                 user-centered thinking to every project I work on. I look
//                 forward to the opportunity to bring my skills and passion to
//                 your next project.
               
//               </p> */}
//             </div>

//            <div className=" col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
//             bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
//            ">
//             <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
//             <Image style={{borderRadius:"50%"}}  src={profilePic} alt="profile" className=" w-full h-auto rounded-2xl" 
//              priority 
//              sizes="(max-width:768px) 100vw,
//              (max-width:1200px) 50vw, 
//              33vw
//              "
//             ></Image>
//            </div>

//            <div className=" col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row  xl:items-center md:order-3">
//             <div className=" flex flex-col items-end justify-center xl:items-center ">
//               <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
//                 <AnimatedNumbers value={3}/>+
//               </span>
//               <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm ">MERN Projects</h2>
//             </div>
//             {/*  */}
//             <div className=" flex flex-col items-end justify-center  xl:items-center">
//               <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
//                <AnimatedNumbers value={10}/>+
//               </span>
//               <h2  className=" text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">Projects completed</h2>
//             </div>

//             {/*  */}
            
//             <div className=" flex flex-col items-end justify-center  xl:items-center">
//               <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
//                <AnimatedNumbers value={1.5}/>+
//               </span>
//               <h2  className=" text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">Years of experience</h2>
//             </div>
//            </div>
//           </div>
//         </Layout>
//         <Skills/>
//         <Experience/>/
    
  
//         <Education/>
//       </main>
//     </>
//   );
// };

// export default about;
