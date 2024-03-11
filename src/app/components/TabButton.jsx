import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    "text-[#ADB7BE] bg-transparent hover:bg-slate-600 hover:text-white";
  
  const borderClasses = active
    ? "border-primary-500"
    : "border-slate-600 hover:border-white";

  return (
    <button
      onClick={selectTab}
      className={`${buttonClasses} ${borderClasses} rounded-custom border-2 px-3 py-3 text-md cursor-pointer justify-center flex items-center flex-grow`}
    >
      <p className="texte-white">
        {children}
      </p>
      <motion.div
        initial={false}
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 absolute bottom-0 left-0 right-0 mx-auto"
      ></motion.div>
    </button>
  );
};

export default TabButton;
