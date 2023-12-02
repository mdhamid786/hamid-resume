import { motion } from "framer-motion";
import Link from "next/link";
import profilePic from "../../public/images/profile/bgimg.jpeg";
import Image from "next/image";


const Logo = () => {

  const MotionLink = motion(Link)

  return (
    <>
      <div className=" flex items-center justify-center mt-2">
        <MotionLink
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)"],

          transition:{duration:1 , repeat:Infinity}
        }}
          className=" w-16 h-16 bg-dark text-light dark:border-light flex items-center justify-center
           rounded-full text-2xl font-bold border border-solid border-tra]" 
          href="/"
        >
          <Image style={{borderRadius:"50%"}} src={profilePic}></Image>
        </MotionLink>
      </div>
    </>
  );
};

export default Logo;
