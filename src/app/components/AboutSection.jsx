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
        <h3 className="font-bold text-sm mb-2">Langages & Scripting</h3>
        <ul className="list mb-4 text-sm">
          <li>HTML5</li>
          <li>CSS / Sass / Less</li>
          <li>JavaScript (ES6+) / TypeScript</li>
          <li>PHP7</li>
          <li>Shell Scripting: Bash</li>
        </ul>

        <h3 className="font-bold text-sm mb-2">Frameworks & Bibliothèques</h3>
        <ul className="list mb-4 text-sm">
          <li>React / Next.js / Gatsby</li>
          <li>Bootstrap / Tailwind</li>
        </ul>

        <h3 className="font-bold text-sm mb-2">Développement Back-End et Bases de Données</h3>
        <ul className="list mb-4 text-sm">
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>

        <h3 className="font-bold text-sm mb-2">Outils & Infrastructure</h3>
        <ul className="list mb-4 text-sm">
          <li>Git / GitHub / GitLab</li>
          <li>Vercel / Netlify / Heroku/ DigitalOcean</li>
          <li>Apache</li>
          <li>HTTPS / SSL / Gestion DNS / Cloudflare</li>
        </ul>

        <h3 className="font-bold text-sm mb-2">Conception & Gestion de Projet</h3>
        <ul className="list mb-4 text-sm">
          <li>Conception: UML</li>
          <li>Gestion de Projet: Kanban</li>
        </ul>

        <h3 className="font-bold text-sm mb-2">CMS & Optimisation</h3>
        <ul className="list text-sm">
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
      <ul className="list text-sm">
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
      <h3 className="font-bold text-sm mb-2">Outils de Création</h3>
      <ul className="list text-sm">
        <li>Adobe Creative Cloud</li>
        <li>Corel</li>
        <li>Blender</li>
        <li>Figma</li>
      </ul>
<br/>
      <h3 className="font-bold text-sm mb-2">Compétences en Design</h3>
      <ul className="list mb-4 text-sm">
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
      <ul className="list text-sm">
        <li>Anglais - C1 </li>
        <li>Français - C1</li>
        <li>Espagnol - C1</li>
        <li>Russe - C1</li>
         <li>Grec - B2</li>
      </ul>
    ),
  },
];




const ReadMoreText = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);

    // Cette fonction nettoie le texte des entités HTML et gère les sauts de ligne
   
  
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
    // On utilise 'substring' pour couper le texte et 'cleanText' pour nettoyer le texte
   

  return (
    <>
   <p className="text-base md:text-sm" style={{ whiteSpace: 'pre-wrap' }}>
      {isReadMore ? text.slice(0, maxLength) + "..." : text}
      </p>
      <button onClick={toggleReadMore} className="text-primary-500 hover:text-secondary border-slate-700">
        {isReadMore ? 'Savoir plus' : 'Montrer moins'}
      </button>
    </>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  

  const fullText = `
          
            ✨ C'est moi, la digital nomade, slalomant entre codes et créativité depuis ma sortie de l'Université de Télécommunications en 2021. Actuellement, je me spécialise chez OpenClassrooms pour devenir maître Jedi en JavaScript et React, prête à conquérir le web.
            

🌍 Avec un cocktail de langues (anglais, espagnol, grec, russe, français) en main, je brise les barrières du code et de la culture, injectant une dose d'innovation dans chaque pixel. Ma mission ? Animer le web avec des designs qui parlent et des codes qui dansent.
       
       🚀 Exploratrice du digital, j'ai collaboré avec des âmes créatives mondialement, transformant chaque projet en une aventure unique. Je crois en l'innovation ancrée dans l'authenticité, laissant ma marque sur le web, une ligne de code à la fois.
         
       
            💥 Prêts pour une odyssée numérique où créativité et technologie fusionnent ? Embarquons ensemble vers l'infini du web.
             
            `;

             return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="py-8">
        <Image src="/images/setup.webp" alt="setup de geek" width={500} height={500} className="rounded-custom transform rotate-[-6deg]"/></div>
        <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">01. Ma Saga Numérique</h2>
          <ReadMoreText text={fullText} maxLength={295} />


          <div className="flex flex-row justify-center flex-wrap gap-2 mt-8">
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
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;