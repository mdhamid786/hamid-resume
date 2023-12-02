"use client"
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const Listicon = ({reference}) => {
    const {scrollYProgress} = useScroll({
        target:reference,
        offset:[" center end" , "center center"]
    })
  return (
    <>
     <figure className=' absolute left-0 stroke-dark dark:stroke-light '>
        <svg className=' -rotate-90 md:w-[60%] md:h-[60%] xs:w-[40%] xs:h-[40%] ' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className=' stroke-primary dark: bg-green-300 stoke-1 fill-none'/>
            <motion.circle cx="75" cy="50" r="20" className=' stoke-[5px] fill-light dark:fill-rose-900'
            style={{
                pathLength:scrollYProgress
            }}
            />
            <circle cx="75" cy="50" r="10" className=' animate-pulse stoke-1 fill-primary dark:fill-purple-500'/>

        </svg>

     </figure>
    </>
  )
}

export default Listicon
