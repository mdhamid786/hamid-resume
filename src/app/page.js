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
      <main className=" flex items-center text-dark min-h-screen  dark:text-light">
        <Layout className="pt-0  sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
           <div className="w-1/2 md:w-full flex justify-center items-center">
  <Image
    src={profilePic}
    alt="profile"
    priority
    className="rounded-full w-[80%] max-h-[700px] object-cover"
    sizes="(max-width:600px) 100vw,
           (max-width:1200px) 50vw,
           50vw"
    style={{
      height: "auto",
    }}
  />
</div>

            <div className=" w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Software Engineer"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl   "
              />
                <p className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm my-1">
             ||    Full Stack Software Engineer | 3+ Yrs Experience | Passionate About DevOps & AWS  || <span style={{display:"none"}}>Team Lead .</span>
                </p>
              <p
                style={{ textAlign: "justify" }}
                className=" my-4 text-base font-medium md:text-sm sm:text-xs"
              >
             Full Stack Software Engineer with 3 years of hands-on experience in designing, developing, and deploying scalable web applications. Proficient in React.js, Next.js, Node.js, and MongoDB, with a strong foundation in both frontend UI/UX and backend architecture. Adept at crafting clean, modular, and performance-optimized code.

Currently expanding expertise in DevOps practices — including CI/CD pipelines, Docker, and GitHub Actions — with practical experience in AWS deployments (EC2, S3, RDS, Route 53). Passionate about automation, system reliability, and end-to-end product ownership.

Driven by problem-solving and product innovation, I thrive in collaborative environments where I can contribute to both development and infrastructure scalability.
              </p>

              <div className=" flex items-center self-start mt-2 lg:self-center">
                <Link
                  className="flex items-center bg-dark text-light  p-2.5 px-6 rounded-lg text-lg
                   font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                    hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                     md:p-2 md-px-4 md:text-base"
                  download={true}
                  href="Hamid_Full_Stack_Engineer.pdf"
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
