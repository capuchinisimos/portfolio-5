"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NEOTECHNOLOGIES : Sécurité & Tech",
    description: "Avec NEOTECHNOLOGIES, j'ai boosté la sécurité : alarmes, vidéosurveillance, et plus. Ensemble, on crée des refuges high-tech.",
    image: "/images/projects/neotechnologies/neot.gif",
    tag: ["Global", "Business"],
    gitUrl: "https://github.com/capuchinisimos/Neotechnologie",
    previewUrl: "https://www.neotechnologies-sn.com/",
  },
  {
    id: 2,
    title: "VITALII POPOV : Maestro du Bois",
    description: "Main dans la main, dévoilant l'art de Vitalii, maître charpentier, en sculptant des merveilles architecturales à partir du bois.",
    image: "/images/projects/vitaliipopov/portfolio.gif",
    tag: ["Global", "Business"],
    
    previewUrl: "https://vitaliipopov.pro/",
  },
  {
    id: 3,
    title: "PBMM : Métal Magic",
    description: "En trois mots? Métal, magie, vous. PBMM réinvente votre espace avec du métal qui a du caractère. ",
    image: "/images/projects/pbmm/pbmm.gif",
    tag: ["Global", "Business"],
    gitUrl: "https://github.com/capuchinisimos/PBMM",
    previewUrl: "https://pbmm.pro/",
  },
  {
    id: 4,
    title: "ÉVASION ROCHEUSES A JOHNNY'S",
    description: "Au cœur de Banff, Canada - confort, aventures neige & soleil à portée.",
    image: "/images/projects/johnny/johnny.gif",
    tag: ["Global", "Business"],
    gitUrl: "https://github.com/capuchinisimos/vacation-rental-site",
    previewUrl: "https://johnnyscountryhouse.info",
  },
  {
    id: 5,
    title: "CUPCAKE QUITEÑO: Douceurs Équatoriennes",
    description: "Trois virtuoses du goût élèvent les cupcakes à Quito, mêlant flair, fraîcheur, et fantaisie.",
    image: "/images/projects/cupcake/capcake.gif",
    tag: ["Global", "Business"],
    gitUrl: "https://github.com/capuchinisimos/cupcake",
    previewUrl: "https://capuchinisimos.github.io/cupcake/",
  },
  {
    id: 6,
    title: "IDILIO Couture: Art & Retouche",
    description: "À Versailles, votre univers textile réinventé: retouches précises, créations sur-mesure, cours inspirants.",
    image: "/images/projects/idilio/idilio.gif",
    tag: ["Global", "Business"],
    gitUrl: "https://github.com/capuchinisimos/idilio",
    previewUrl: "https://idiliocouture.me/",
  },
  
  
  {
    id: 7,
    title: "LES PETITS PLATS: Révolution Culinaire Digitale",
    description: "Orchestrer un site de recettes novateur pour une recherche fulgurante, via un duo d'algorithmes captivants.",
    image: "/images/projects/lespetitsplats/lespetitsplats.gif",
    tag: ["Global", "Académie"],
    gitUrl: "https://github.com/capuchinisimos/p7",
    previewUrl: "https://les-petits-plats-v1.vercel.app/",
  },
  {
    id: 8,
    title: "FISHEYE: L'Art de l'Accessibilité",
    description: "Création d'un écosystème digital pour photographes où accessibilité et fonctionnalités avancées se conjuguent à travers un défi de codage structuré et progressif.",
    image: "/images/projects/fisheye/fisheye.gif",
    tag: ["Global", "Académie"],
    gitUrl: "https://github.com/capuchinisimos/p6-Front-End-Fisheye",
    previewUrl: "https://p6-front-end-fisheye.vercel.app/",
  },
  {
    id: 9,
    title: "GAMEON: Validation Dynamique",
    description: "Plongez dans l'arène des jeux vidéo avec une inscription simplifiée, où chaque champ navigue à travers la vérification JavaScript pour une expérience sans accroc, tout cela au cœur de l'action.",
    image: "/images/projects/gameon/gameon.gif",
    tag: ["Global", "Académie"],
    gitUrl: "https://github.com/capuchinisimos/GameOn-website-FR",
    previewUrl: "https://p4-woad.vercel.app/",
  },
  {
    id: 10,
    title: "OH MY FOOD:  Plongée dans l'Art Culinaire avec CSS",
    description: "Découvrez Oh My Food, l'univers où CSS sculpte une expérience culinaire immersive, sans JavaScript, pour les gourmets connectés.",
    image: "/images/projects/omf/omf.gif",
    tag: ["Global", "Académie"],
    gitUrl: "https://github.com/capuchinisimos/Projet3-Oh-my-food",
    previewUrl: "https://ocp3-oh-my-food.vercel.app/",
  },
  {
    id: 11,
    title: "BOOKI: Prototype de Site de Voyage en HTML & CSS",
    description: "Créez un prototype Booki, un site de voyage responsive en HTML & CSS, adapté à tous les écrans, sans frameworks CSS, en utilisant Flexbox, Font Awesome et conformément aux normes W3C.",
    image: "/images/projects/booki/booki.gif",
    tag: ["Global", "Académie"],
    gitUrl: "https://github.com/capuchinisimos/Booki",
    previewUrl: "https://booki-p2-oc.netlify.app/",
  },
  {
    id: 12,
    title: "WEBAGENCY: Lancement d'une Épopée Numérique",
    description: "Plongez dans le défi de forger un site Webagency épique, orchestré sur une unique toile HTML et CSS. Responsive et libre de tout framework, ce projet est votre scène pour transposer une vision créative en une réalité numérique fascinante.",
    image: "/images/projects/webagency/1.gif",
    tag: ["Global", "Académie"],
    gitUrl: "https://github.com/capuchinisimos/webagency",
    previewUrl: "https://capuchinisimos.github.io/webagency/",
  },
  {
    id: 13,
    title: "JARDIN",
    description: "Project 5 description",
    image: "/images/projects/regis-jardin/jardin.gif",
    tag: ["Global", "Business"],
    gitUrl: "https://github.com/capuchinisimos/landing-page",
    previewUrl: "https://capuchinisimos.github.io/landing-page/",
  },
  {
    id: 14,
    title: "SWAMI",
    description: "Project 5 description",
    image: "/images/projects/swami/portfolio.gif",
    tag: ["Global", "Business"],
    gitUrl: "https://github.com/capuchinisimos/landing",
    previewUrl: "https://capuchinisimos.github.io/landing/",
  },
  {
    id: 15,
    title: "NOUMEA",
    description: "Project 5 description",
    image: "/images/projects/noumea/noumea.gif",
    tag: ["Global", "Académie"],
  },
  {
    id: 16,
    title: "PORTFOLIO-1",
    description: "Project 5 description",
    image: "/images/projects/portfolio-1/portfolio.gif",
    tag: ["Global", "Perso"],
    gitUrl: "https://github.com/capuchinisimos/portfolio",
    previewUrl: "https://oceaneverdi.me/",
  },
  {
    id: 18,
    title: "PORTFOLIO-2",
    description: "Project 5 description",
    image: "/images/projects/portfolio-2/portfolio.gif",
    tag: ["Global", "Perso"],
    gitUrl: "https://github.com/capuchinisimos/portfolio-3",
    previewUrl: "https://oceanedev.es/",
  },
  {
    id: 19,
    title: "PORTFOLIO-3",
    description: "Project 5 description",
    image: "/images/projects/portfolio-3/portfolio.gif",
    tag: ["Global", "Perso"],
    gitUrl: "https://github.com/capuchinisimos/portfolio-4",
    previewUrl: "https://oceane.es/",
  },
  {
    id: 20,
    title: "PORTFOLIO-4",
    description: "Project 5 description",
    image: "/images/projects/portfolio-4/1.gif",
    tag: ["Global", "Perso"],
    gitUrl: "https://github.com/capuchinisimos/portfolio-2",
    previewUrl: "https://oceaneverdi.dev/",
  },
  {
    id: 19,
    title: "COVERS",
    description: "Project 5 description",
    image: "/images/projects/design/covers/covers1.gif",
    tag: [ "Art"],
    
  },
  {
    id: 20,
    title: "DEPLIANTES",
    description: "Project 5 description",
    image: "/images/projects/design/depliantes/dep1.gif",
    tag: [ "Art"],
    
  },
  {
    id: 19,
    title: "FLYERS",
    description: "Project 5 description",
    image: "/images/projects/design/flyers/flyers1.gif",
    tag: [ "Art"],
    
  },
  {
    id: 20,
    title: "LOGOS",
    description: "Project 5 description",
    image: "/images/projects/design/logos/lg.gif",
    tag: [ "Art"],
    
  },
  {
    id: 19,
    title: "NEWSLETTERS",
    description: "Project 5 description",
    image: "/images/projects/design/newsletters/neonews.gif",
    tag: ["Art"],
    
  },
  {
    id: 20,
    title: "BANNIÈRES",
    description: "Project 5 description",
    image: "/images/projects/design/redes/banners.gif",
    tag: ["Art"],
    
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Global");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
return (
  <section id="projects" className="px-4 md:px-8">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      02. Labo du Code
    </h2>
    <p className="text-[#ADB7BE] mb-4 text-center">
      Bienvenue dans mon "Labo du Code", l'antre où la magie du développement prend vie. Ici, chaque projet est une potion unique, distillée à partir de la quintessence de la technologie et de l'art. En franchissant ces portes virtuelles, vous découvrirez des créations nées d'expérimentations audacieuses et d'innovations sans limites. Malgré les serments de confidentialité qui scellent certains de mes travaux dans l'ombre, j'ai le plaisir de lever le voile sur une sélection de mes explorations les plus passionnantes. Ready pour une dose de cool tech ?
    </p>
    <div className="flex flex-wrap justify-center items-center gap-2 py-4 px-4 md:py-6">
      <ProjectTag
        onClick={handleTagChange}
        name="Global"
        isSelected={tag === "Tous"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Business"
        isSelected={tag === "Corporatifs"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Académie"
        isSelected={tag === "Académie"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Perso"
        isSelected={tag === "Perso"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Art"
        isSelected={tag === "Infographie"}
      />
    </div>
    <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-4">
      {filteredProjects.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
      ))}
    </ul>
  </section>
);

};

export default ProjectsSection;
