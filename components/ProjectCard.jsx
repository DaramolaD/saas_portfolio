import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ client, img, tools, description, liveLink }) => {
  return (
    <Link
      href={liveLink ? liveLink : `project/${client}`}
      className="relative z-10 rounded-sm overlayDetailCont hover:shadow-md hover:shadow-primary-normalHover"
      style={{ backgroundImage: "/../assets/projectsimg/Femi.png" }}
    >
      <div className="img max-w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <Image
          src={img}
          fill
          style={{ ObjectFit: "cover" }}
          alt="projectImg"
          className="w-full rounded-xl"
        />
      </div>
      <div className="overlayDetail hidden absolute items-start justify-center w-full bottom-0 left-0 ease-in duration-300">
        <div className="w-full flex p-5 bg-bg2-100 justify-between items-start">
          <h4 className="sm:text-base lg:text-lg text-white">{client}</h4>
          <div className="flex flex-col gap-4">
            <p className="sm:text-base lg:text-lg text-wrap text-white">
              {description}
            </p>
            <p className="sm:text-base lg:text-lg text-primary-normal">
              {tools}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
