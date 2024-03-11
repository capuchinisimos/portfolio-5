import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="w-full h-52 md:h-52 rounded-t-xl relative group rounded-custom"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", objectFit: "contain" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {gitUrl && (
            <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white" />
            </a>
          )}
          {previewUrl && (
            <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white" />
            </a>
          )}
        </div>
      </div>
      <div className="text-white text-center rounded-b-xl mt-3 bg-[#181818]py-6 px-4 text-sm">
        <h3 className="text-sm  font-semibold mb-2 ">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
