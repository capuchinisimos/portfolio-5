"use client";
import React, { useTransition, useState, useEffect, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';



const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const contentRef = useRef(null);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  // Utiliser l'API Intersection Observer pour ouvrir l'accordéon lors du défilement
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsOpen(true);
        }
      },
      { threshold: 0.1 } // Déclenche l'observer lorsque 10% de l'élément est visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-4">
      <button
        onClick={toggleAccordion}
        className={`flex items-center justify-center w-full px-4 py-2 rounded-custom font-bold text-lg transition-colors duration-300 ${
    isOpen ? 'bg-gradient-to-r from-primary-500 to-secondary-500 opacity-70' : 'bg-gradient-to-r from-indigo-500 to-primary-400  opacity-70 text-black'
  }`}
      >
        <span>{title}</span>
        {isOpen ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0' }}
        className="transition-max-height duration-300 ease-in-out  overflow-hidden"
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};


const SkillsSection = () => {
  return (
    <>
      <AccordionItem title="Langages & Scripting">
        <ul>
          <li>HTML5</li>
          <li>CSS / Sass / Less</li>
          <li>JavaScript (ES6+) / TypeScript</li>
          <li>PHP7</li>
          <li>Shell Scripting: Bash</li>
          {/* autres éléments */}
        </ul>
      </AccordionItem>
      <AccordionItem title="Frameworks & Bibliothèques">
      <ul >
          <li>React / Next.js / Gatsby</li>
          <li>Bootstrap / Tailwind</li>
        </ul>
        {/* contenu */}
      </AccordionItem>
      <AccordionItem title="Développement Back-End et Bases de Données">
      <ul >
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
        {/* contenu */}
      </AccordionItem>
      <AccordionItem title="Outils & Infrastructure">
      <ul >
          <li>Git / GitHub / GitLab</li>
          <li>Vercel / Netlify / Heroku/ DigitalOcean</li>
          <li>Apache</li>
          <li>HTTPS / SSL / Gestion DNS / Cloudflare</li>
        </ul>
        {/* contenu */}
      </AccordionItem>
      <AccordionItem title="Conception & Gestion de Projet">
      <ul >
          <li>Conception: UML</li>
          <li>Gestion de Projet: Kanban</li>
        </ul>
        {/* contenu */}
      </AccordionItem>
      <AccordionItem title="CMS & Optimisation">
      <ul >
          <li>CMS: WordPress / PrestaShop</li>
          <li>Responsive Design / SEO / Accessibilité Web (WCAG)</li>
        </ul>
        {/* contenu */}
      </AccordionItem>
     
    </>
  );
};
const EducationSection = () => {
  return (
    <>
      <AccordionItem title="Parcours académique">
      <ul >
        <li>
          Openclassrooms - Développement d&apos;applications JavaScript React - Titre RNCP Niveau BAC+4 (en cours)
          </li>
          <br/>
        <li>
          Université d&apos;État des Télécommunications de Saint-Pétersbourg nommée d&apos;après le Professeur M.A. Bonch-Bruevich - Programmation dans les Systèmes Informatiques (2021)
        </li>
      </ul>
</AccordionItem>
</>
  );
};

const CertificationsSection = () => {
  return (
    <>
      <AccordionItem  title="Outils de Création">
      <ul >
        <li>Adobe Creative Cloud</li>
        <li>Corel</li>
        <li>Blender</li>
        <li>Figma</li>
      </ul>
</AccordionItem>
<AccordionItem  title="Compétences en Design">
<ul >
          <li>CMS: WordPress / PrestaShop</li>
          <li>Responsive Design / SEO / Accessibilité Web (WCAG)</li>
        </ul>
</AccordionItem>
</>
  );
};

const LinguistiqueSection = () => {
  return (
    <>
      <AccordionItem title="Langues">
      <ul >
        <li>Anglais - C1 </li>
        <li>Français - C1</li>
        <li>Espagnol - C1</li>
        <li>Russe - C1</li>
         <li>Grec - B2</li>
      </ul>
</AccordionItem>
</>
  );
};







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
      {isReadMore ? text.slice(0, maxLength) + "" : text}
      </p>
      <button onClick={toggleReadMore} className="text-primary-500 hover:text- border-slate-700">
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
  const renderContent = () => {
    switch(tab) {
      case "skills":
        return <SkillsSection />;
      case "education":
        return <EducationSection />
        // Retournez le contenu pour education ici
        ;
      case "certifications":
        return <CertificationsSection />
      
        // Retournez le contenu pour certifications ici
        ;
      case "langues":
        return <LinguistiqueSection />
        // Retournez le contenu pour langues ici
        ;
      default:
        return <SkillsSection />;
    }
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
        <Image src="/images/setup.webp" alt="setup de geek" width={500} height={500} className="rounded-custom transform rotate-[6deg]"/>
        <div className="hidden md:block">
            <Image src="/images/moi.webp" alt="description de la deuxième image" width={500} height={500} className="rounded-custom transform rotate-[-6deg] mt-16" />
          </div>
        </div>
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
            {/* ... autres boutons d'onglet */}
          </div>
          <div className="mt-8 ">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;