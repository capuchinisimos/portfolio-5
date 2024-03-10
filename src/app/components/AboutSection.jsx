"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <h3 className="font-bold text-lg mb-2">Langages & Scripting</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>HTML5</li>
          <li>CSS / Sass / Less</li>
          <li>JavaScript (ES6+) / TypeScript</li>
          <li>PHP7</li>
          <li>Shell Scripting: Bash</li>
        </ul>

        <h3 className="font-bold text-lg mb-2">Frameworks & Bibliothèques</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>React / Next.js / Gatsby</li>
          <li>Bootstrap / Tailwind</li>
        </ul>

        <h3 className="font-bold text-lg mb-2">Développement Back-End et Bases de Données</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>

        <h3 className="font-bold text-lg mb-2">Outils & Infrastructure</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Git / GitHub / GitLab</li>
          <li>Vercel / Netlify / Heroku/ DigitalOcean</li>
          <li>Apache</li>
          <li>HTTPS / SSL / Gestion DNS / Cloudflare</li>
        </ul>

        <h3 className="font-bold text-lg mb-2">Conception & Gestion de Projet</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Conception: UML</li>
          <li>Gestion de Projet: Kanban</li>
        </ul>

        <h3 className="font-bold text-lg mb-2">CMS & Optimisation</h3>
        <ul className="list-disc pl-4">
          <li>CMS: WordPress / PrestaShop</li>
          <li>Responsive Design / SEO / Accessibilité Web (WCAG)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
    <>
      <ul className="list-disc pl-4">
        <li>
          Openclassrooms - Développement d&apos;applications JavaScript React - Titre RNCP Niveau BAC+4 (en cours)
          </li>
          <br/>
        <li>
          Université d&apos;État des Télécommunications de Saint-Pétersbourg nommée d&apos;après le Professeur M.A. Bonch-Bruevich - Programmation dans les Systèmes Informatiques (2021)
        </li>
      </ul>
    </>
  ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
    <>
      <h3 className="font-bold text-lg mb-2">Outils de Création</h3>
      <ul className="list-disc pl-4">
        <li>Adobe Creative Cloud</li>
        <li>Corel</li>
        <li>Blender</li>
        <li>Figma</li>
      </ul>
<br/>
      <h3 className="font-bold text-lg mb-2">Compétences en Design</h3>
      <ul className="list-disc pl-4 mb-4">
        <li>2D / 3D</li>
        <li>Motion Design</li>
      </ul>
    </>
  ),
  },
  {
    title: "Linguistique",
    id: "langues",
    content: (
      <ul className="list-disc pl-2">
        <li>Anglais - C1 </li>
        <li>Français - C1</li>
        <li>Espagnol - C1</li>
        <li>Russe - C1</li>
         <li>Grec - B2</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="pt-32">
        <Image src="/images/setup.webp" alt="setup de geek" width={500} height={500} className="rounded-custom transform rotate-[-6deg]"/></div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">01. Ma Saga Numérique</h2>
          <p className="text-base md:text-md">
            <br/>
            ✨ C&apos;est moi, la digital nomade, slalomant entre codes et créativité depuis ma sortie de l&apos;Université de Télécommunications en 2021. Actuellement, je me spécialise chez OpenClassrooms pour devenir maître Jedi en JavaScript et React, prête à conquérir le web.

<br/><br/>
🌍 Avec un cocktail de langues (anglais, espagnol, grec, russe, français) en main, je brise les barrières du code et de la culture, injectant une dose d&apos;innovation dans chaque pixel. Ma mission ? Animer le web avec des designs qui parlent et des codes qui dansent.
              <br/ ><br/ >
       
       🚀 Exploratrice du digital, j&apos;ai collaboré avec des âmes créatives mondialement, transformant chaque projet en une aventure unique. Je crois en l&apos;innovation ancrée dans l&apos;authenticité, laissant ma marque sur le web, une ligne de code à la fois.
            <br /><br />
            💥 Prêts pour une odyssée numérique où créativité et technologie fusionnent ? Embarquons ensemble vers l&apos;infini du web.
          </p>
          <div className="flex flex-row justify-start flex-wrap mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              🔧 Numéri-Kit {" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              🎨 CréaVibes{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              📚 EduTrail{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("langues")}
              active={tab === "langues"}
            >
              {" "}
              🌍 LangueLink{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;