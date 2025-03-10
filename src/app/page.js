import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profileImage.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import Hire from "@/components/Hire";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <main className=" flex items-center text-dark min-h-screen  md:pt-16 dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className=" w-1/2 md:w-full">
              <Image
                style={{ width: "80%", borderRadius: "50%" }}
                src={profilePic}
                alt="profile"
                className="h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw, 
              50vw
              "
              ></Image>
            </div>
            <div className=" w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Software Engineer"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl   "
              />
              <p
                style={{ textAlign: "justify" }}
                className=" my-4 text-base font-medium md:text-sm sm:text-xs"
              >
                {/* As a skilled MERN Stack Developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in full stack development
                web development. */}
                Full Stack Engineer with 2.6 years of professional experience
                and a B.Tech degree. Skilled in backend and frontend
                technologies, specializing in dynamic and responsive user
                interfaces with React.js and Next.js. Expertise in scalable web
                applications, modern JavaScript, MongoDB, and integrating robust
                RESTful APIs using Node.js
                {/* Seeking
                opportunities to apply my expertise and passion for crafting
                exceptional web experiences in a dynamic and growth-oriented
                environment. */}
              </p>

              <div className=" flex items-center self-start mt-2 lg:self-center">
                <Link
                  className="flex items-center bg-dark text-light  p-2.5 px-6 rounded-lg text-lg
                   font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                    hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                     md:p-2 md-px-4 md:text-base"
                  download={true}
                  href="Hamid_FullStack_2.6yrsExp.pdf"
                  target="_blank"
                  passHref
                >
                  Resume
                  <LinkArrow className=" w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:ali.hamid161999@gmail.com"
                  target="_blank"
                  className=" ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hire />
        {/* hhr */}
        <div className=" absolute right-12  bottom-0 inline-block  w-24 md:hidden mt-12">
          <Image src={lightBulb} className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
