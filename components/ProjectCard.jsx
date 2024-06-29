"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const ProjectCard = ({
  client,
  img,
  tools,
  description,
  project,
  liveLink,
  status,
}) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col gap-2 relative justify-between items-stretch h-auto rounded-xl md:rounded-3xl bg-bg2-100 overflow-hidden pb-3 md:pb-2">
        <div className="relative w-full max-h-[1024px] p-2 sm:p-6">
          <Image
            src={img}
            layout="responsive"
            width={700} // Adjust according to your needs
            height={1024} // This ensures the correct aspect ratio
            alt="project_img"
            className="object-contain rounded-lg sm:rounded-xl"
            style={{ maxHeight: "1024px" }}
          />
        </div>

        <div className="w-full h-full flex-col flex-1 flex justify-between items-stretch gap-6 md:gap-5 md:gap-8 p-3 sm:p-5 md:p-10 !pt-0 bg-bg2-100">
          <div className="grid gap-3 md:gap-5">
            <div className="flex gap-1 flex-wrap">
              {project.map(({ id, text }) => (
                <div
                  key={id}
                  className="flex w-fit px-2 pt-[2px] pb-[3px] items-center justify-center border border-primary-darkActive rounded-full"
                >
                  <p className="text-xs md:text-base text-nowrap text-white italic w-full">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              <h4 className="text-xl lg:text-3xl text-white">{client}</h4>
              <p className="text-sm md:text-lg xl:text-xl text-white">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex sm:flex-row gap-4 md:gap-10 justify-between items-start">
              <p className="min-w-14 md:min-w-20 text-sm sm:text-lg lg:text-xl text-wrap text-white text-start">
                Tools:
              </p>
              <p className="text-sm sm:text-lg lg:text-xl text-wrap text-white italic w-full">
                {tools}
              </p>
            </div>
            {status && (
              <div className="flex sm:flex-row gap-4 md:gap-10 justify-between items-start">
                <p className="min-w-14 md:min-w-20 text-sm sm:text-lg lg:text-xl text-wrap text-white text-start">
                  Status:
                </p>
                <p className="text-sm sm:text-lg lg:text-xl text-wrap text-white71 italic w-full">
                  {status}
                </p>
              </div>
            )}
            {client === "SynFlow" ? (
              <div className="flex flex-col gap-2 justify-between md:flex-row">
                <Button
                  variant="default"
                  size="lg"
                  className="flex gap-1 w-fit mt-5 py-1 px-9 md:px-8 md:py-2 text-base md:text-xl"
                  onClick={() =>
                    router.push(
                      "https://www.figma.com/proto/dOYCfreXWboroh6d8C8mpi/SynFlow?node-id=1-17689"
                    )
                  }
                >
                  View Design (Figma)
                  <ArrowTopRightIcon className="w-6 md:w-8 h-6 md:h-8" />
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="flex gap-1 w-fit mt-5 py-1 px-9 md:px-8 md:py-2 text-base md:text-xl"
                  onClick={() =>
                    router.push(
                      "https://synflow-dev.vercel.app/"
                    )
                  }
                >
                  Live
                  <ArrowTopRightIcon className="w-6 md:w-8 h-6 md:h-8" />
                </Button>
              </div>
            ) : (
              <Button
                variant="default"
                size="lg"
                className="flex gap-1 w-fit mt-5 py-1 px-9 md:px-8 md:py-2 text-base md:text-xl"
                onClick={() =>
                  router.push(`${liveLink ? liveLink : `project/${client}`}`)
                }
              >
                {liveLink ? "View Live Project" : "View"}
                <ArrowTopRightIcon className="w-6 md:w-8 h-6 md:h-8" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
