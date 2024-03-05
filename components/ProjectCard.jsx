import Image from "next/image";
import React from "react";

const ProjectCard = ({ client, img, tools, description }) => {
  return (
    <div
      className="relative z-10 rounded-sm overlayDetailCont hover:shadow-md hover:shadow-primary-normalHover"
      style={{ backgroundImage: "/../assets/projectsimg/Femi.png" }}
    >
      <img src={img} alt="" className="w-full rounded-xl h-auto" />
      <div className="overlayDetail hidden absolute items-start justify-center w-full bottom-0 left-0">
        <div className="w-full flex p-5 bg-bg2-100 justify-between items-start">
          <h4 className="sm:text-base lg:text-lg text-white">{client}</h4>
          <div className="flex flex-col gap-4">
            <p className="sm:text-base lg:text-lg text-wrap text-white">{description}</p>
            <p className="sm:text-base lg:text-lg text-primary-normal">
              {tools}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
