"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TwitterIcon from "../../../public/close-square-svgrepo-com.svg";
import InstagramIcon from "../../../public/icons8-instagram (1).svg";
import FacebookIcon from "../../../public/icons8-facebook-nouveau.svg";
import WhatsappIcon from "../../../public/icons8-whatsapp.svg";
import MailIcon from "../../../public/icons8-apple-mail.svg";
import Link from "next/link";
import Image from "next/image";
  
function openInNewTab(url) {
  if (typeof window !== "undefined") {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-30">
        <h2 className="text-3xl font-bold text-white my-2">
         03. Allô, le Labo?
        </h2>
        <p className="text-white mb-4 max-w-md text-md">
          {" "}
          Mon inbox, c&apos;est un peu comme la porte d&apos;un frigo : toujours ouverte pour les bonnes idées et les échanges sympas. Lancez-moi un message, et mettons du piquant dans nos projets !
        </p>
        
        <div className="socials flex flex-row gap-2">
        <a onClick={() => openInNewTab("https://github.com/capuchinisimos")} role="button" tabIndex={0}>
    <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
  </a>
  <a onClick={() => openInNewTab("https://www.linkedin.com/in/oceaneverdi/")} role="button" tabIndex={0}>
    <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
  </a>
  <a onClick={() => openInNewTab("https://twitter.com/OceaneWebdev")} role="button" tabIndex={0}>
    <Image src={TwitterIcon} alt="Twitter Icon" width={24} height={24} />
  </a>
  <a onClick={() => openInNewTab("https://www.instagram.com/thebestcoder/")} role="button" tabIndex={0}>
    <Image src={InstagramIcon} alt="Instagram Icon" width={24} height={24} />
  </a>
  <a onClick={() => openInNewTab("https://www.facebook.com/oceanewebdev/")} role="button" tabIndex={0}>
    <Image src={FacebookIcon} alt="Facebook Icon" width={24} height={24} />
  </a>
  <a onClick={() => openInNewTab("mailto:oceanewebdev@gmail.com")} role="button" tabIndex={0}>
    <Image src={MailIcon} alt="Mail Icon" width={24} height={24} />
  </a>
  <a onClick={() => openInNewTab("https://api.whatsapp.com/send?phone=33767073862&text=Hello!")} role="button" tabIndex={0}>
    <Image src={WhatsappIcon} alt="Whatsapp Icon" width={24} height={24} />
  </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email envoyé!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Canal de Transmission (Votre mail)
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 rounded-custom"
                placeholder="adresse-secrete@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                L&apos;aventure commence ici (Objet)
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 rounded-custom"
                placeholder="Quel titre épique donnez-vous à cette quête ? "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium "
              >
                Racontons une histoire (Message)
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 rounded-custom"
                placeholder="Partagez vos rêves, idées ou demandes magiques ici..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white  font-medium py-2.5 px-5 rounded-lg w-full rounded-custom z-30 "
              aria-label="Téléportez-vous à votre destination"
            >
              Téléportez !
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
