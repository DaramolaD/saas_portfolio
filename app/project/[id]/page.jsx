"use client";
import { kaushanScript } from "@/app/font";
import { Button } from "@/components/ui/button";
import { projectDetails } from "@/data/projectDetials";
import { CalendarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import React from "react";

const ProjecItem = () => {
  const params = useParams();
  const selectedProject = projectDetails[params.id];

  if (!selectedProject) {
    notFound();
  }
  console.log("selectedProject", selectedProject);
  return (
    <div className="relative w-full bg-bg2-100 flex items-center justify-center">
      <div className="max-w-screen-2xl">
        <div className="items-start p-36 justify-start flex flex-col w-full max-w-screen-2xl px-[10px] md:px-10 gap-8">
          <h1
            className={`text-2xl leading-normal 2xl:text-3xl 2xl:leading-normal text-center text-white ${kaushanScript.className}`}
          >
            {selectedProject.title}
          </h1>
          <div className="flex flex-wrap gap-20 gap-y-10 flex-col md:flex-row">
            <div className="grid text-white71 flex-1 gap-5">
              <h2 className="text-lg italic">Background:</h2>
              <p>{selectedProject.background}</p>
            </div>
            <div className="flex flex-1 md:justify-center item-center w-fit gap-20 flex-wrap gap-y-8">
              <div className="grid text-white71 h-fit gap-3 md:gap-5">
                <h2 className="text-lg italic">Timeline:</h2>
                <p>Feb 2023 - March 2023</p>
              </div>
              <div className="grid text-white71 h-fit gap-3 md:gap-5">
                <h2 className="text-lg italic">Tools</h2>
                <p>{selectedProject.tools}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-10">
            <div className="flex mt-14 justify-center">
              <Image
                src={selectedProject.introImg.imgUrl}
                fill
                className="w-full !relative max-w-fit max-h-[300px] object-center object-contain"
                alt={selectedProject.introImg.alt}
              />
            </div>
            {selectedProject.highlights && (
              <div className="grid">
                <div className="grid text-white71 flex-1 gap-5">
                  <h2 className="text-xl">Transformation Highlights:</h2>
                  <div className="grid">
                    <ol className="gap-2 grid">
                      {selectedProject.highlights.map(
                        ({ id, title, details }) => (
                          <li className="list-disc" key={id}>
                            <p className="">{title}</p>
                            <p className="text-sm">{details}</p>
                          </li>
                        )
                      )}
                    </ol>
                  </div>
                </div>
              </div>
            )}
            <div className="grid">
              <div className="grid text-white71 flex-1 gap-5">
                <h2 className="text-xl italic">Research:</h2>
                <h2 className="text-lg italic">Competitive analysis:</h2>
                <p>{selectedProject.research}</p>
              </div>
            </div>
            {selectedProject.preImg && (
              <div className="grid gap-10">
                <div className="grid text-white71 flex-1 gap-5">
                  <h2 className="text-xl italic">High Fidelity:</h2>
                </div>
                <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-5 items-start">
                  {selectedProject.preImg.map(({ id, img, maxHeight }) => (
                    // {portfolioPart.map(({ img, id }) => (
                    <Image
                      src={img}
                      fill
                      key={id}
                      className={`w-full !relative max-w-full md:max-w-fit object-center rounded-xl object-contain ${maxHeight && `max-h-[${maxHeight}]`}`}
                      alt="Picture of the author"
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="grid gap-10">
              {selectedProject.outcome && (
                <div className="grid gap-10">
                  <div className="grid text-white71 flex-1 gap-5">
                    <h2 className="text-xl italic">Outcome:</h2>
                    <p>{selectedProject.outcome}</p>
                  </div>
                </div>
              )}
              {selectedProject.fullView && (
                <div className="grid gap-10">
                  <div className="grid text-white71 flex-1 gap-5">
                    <h2 className="text-xl italic">Full Page:</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start max-h-[3000px] overflow-hidden h-full">
                    {selectedProject.fullView.map(({ img, id }) => (
                      <Image
                        src={img}
                        fill
                        key={id}
                        className="w-full !relative object-top object-contain h-full"
                        alt="Picture of the author"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid w-full justify-center mt-20 gap-5">
            <p className="text-lg text-white71">
              Are you convienced: Let Forge your Vision to Reality
            </p>
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center cta gap-5">
              <Button variant="default" size="lg">
                <span className="text-lg">Schedule A Call</span>
                <CalendarIcon className="ml5" />
              </Button>
              <Button variant="outline" size="lg">
                <span className="text-lg">Email</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjecItem;

const portfolioPartOther = [
  {
    id: 9,
    img: "/assets/projectsImg/FemiHome.png",
  },
  {
    id: 10,
    img: "/assets/projectsImg/Femi-Design-Project-Detail.png",
  },
];
const portfolioPart = [
  {
    id: 1,
    img: "/assets/projectsImg/KaterDesktop.png",
  },
  {
    id: 2,
    img: "/assets/projectsImg/about.png",
  },
  {
    id: 3,
    img: "/assets/projectsImg/service.png",
  },
  {
    id: 5,
    img: "/assets/projectsImg/process.png",
  },
  {
    id: 6,
    img: "/assets/projectsImg/testimonies.png",
  },
  {
    id: 8,
    img: "/assets/projectsImg/otherProject.png",
  },
];
