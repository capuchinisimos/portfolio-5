import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-white border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-custom flex-grow justify-center border-2 px-3 py-3 text-md cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
