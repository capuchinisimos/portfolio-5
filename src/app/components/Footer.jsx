import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between px-6 py-8 md:p-12">
       <Link href={"/#about"} 
       className="text-xl  text-white font-semibold">
       <span> &lt;/Océane&gt;</span></Link>
        <p className="text-white-600 mt-4 md:mt-0">© 2024 Océane. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;


