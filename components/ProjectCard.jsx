"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const ProjectCard = ({ client, img, tools, description, liveLink }) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col md:flex-row flex-1 relative justify-between items-stretch h-auto rounded-3xl  bg-bg2-100">
        <div
          className="bg-contain bg-no-repeat bg-center w-full md:w-[60%] h-full min-h-[500px]"
          style={{
            backgroundImage: `url(${img})`,
            // width: "500px",
            // height: "500px",
          }}
        ></div>
        <div className="w-full md:w-[40%] flex-col flex-1 sm:flex justify-between items-stretch gap-5 p-5 md:p-10 bg-bg2-100">
          <h4 className="font-semibold text-xl lg:text-3xl text-white h-full">
            {client}
          </h4>
          <div className="flex flex-wrap gap-10 justify-between items-start">
            <p className="sm:text-lg lg:text-2xl text-wrap text-white text-end">
              Project
            </p>

            <div className="flex flex-col gap-4 items-end h-full">
              <p className="sm:text-lg lg:text-2xl text-wrap text-white text-end">
                {description}
              </p>
              {/* <p className="sm:text-base lg:text-lg text-primary-normal">
            {tools}
          </p> */}
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-between items-center">
            <p className="sm:text-lg lg:text-2xl text-wrap text-white text-end">
              Tools
            </p>
            <p className="sm:text-lg lg:text-2xl text-wrap text-white text-end">
              {tools}
            </p>
          </div>
          <Button
            variant="default"
            size="lg"
            className="w-fit mt-10"
            onClick={() =>
              router.push(`${liveLink ? liveLink : `project/${client}`}`)
            }
          >
            {liveLink ? "View Live Project" : "View"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
