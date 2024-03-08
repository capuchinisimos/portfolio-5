"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

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
              Konnichiwa ! Moi, c&apos;est : {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Océane",
                1000,
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
            {/*<Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 rounded-custom "
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 rounded-custom ">
                 CV
              </span> 
            </Link>*/} 
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
         <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative rounded-custom rotate-[6deg]">
  <Image
    src="/images/avatar1.webp"
    alt="une jeune fille habillé en t-shirt blanche et jeans noir troué"
    className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
    width={300}
    height={300}
  />
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
