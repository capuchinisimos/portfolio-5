"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const imageVariants = {
  initial: {
    scale: 1,
    rotate: 0
  },
  animate: {
    scale: [1, 1.05, 1],
    rotate: [0, 10, 0],
    transition: {
      scale: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut"
      },
      rotate: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut"
      }
    }
  }
};
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start pb-7"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            <strong> Développeuse Front End Passionnée : Océane</strong>  {" "}
            </span>
            <br></br>
            <span style={{ fontSize: '1.2rem' }}>
            <TypeAnimation
              sequence={[
                
                "Sensei du CSS",
                1000,
                "Ninja du JavaScript",
                1000,
                "Samouraï du React",
                1000,
                "Shogun du Code",
                1000,
                "Guerrière du Pixel",
                1000,
                "Alchimiste de l'UX/UI",
                1000,
                "Mage des Bases de Données",
                1000,
                "Voyageuse des Frameworks",
                1000,
                "Architecte des Mondes Virtuels",
                1000,
                "Déesse du Debugging",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
           </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Exploratrice de l&apos;ère numérique, à la conquête de territoires de code inexplorés...
          </p>
          
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white rounded-custom "
            >
             Allô, le Labo?
            </Link>
            <Link
              href="https://oceaneverdi.me/" target="_blank" rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 rounded-custom "
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 rounded-custom ">
                 English
              </span> 
            </Link>
          </div>
        </motion.div>
        
        <motion.div
      initial="initial"
      animate="animate"
      className="col-span-4 place-self-center mt-4 pl-8 lg:mt-0"
    >
      <div className="bg-[#c084fc] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative rounded-custom rotate-[6deg] ">
        <motion.div variants={imageVariants}>
          <Image
            src="/images/avatar1.webp"
            alt="Océane développeuse web, une jeune fille ambitieuse habillé en t-shirt blanche et jeans noir troué"
            className="absolute  -translate-y-16 left-16"
            width={300}
            height={300}
          />
        </motion.div>
      </div>
      <strong style={{ visibility: 'hidden' }}>
        Océane jeune développeuse JavaScript React à Paris
      </strong>
    </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;