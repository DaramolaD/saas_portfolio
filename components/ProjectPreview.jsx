"use client";
import Image from "next/image";
import React from "react";
import { Wave } from "./Icons";

const imgList = [
  {
    id: 1,
    url: "/assets/projectsImg/home.jpg",
  },
  {
    id: 2,
    url: "/assets/projectsImg/p4.jpg",
  },
  {
    id: 3,
    url: "/assets/projectsImg/alliance.png",
  },
  {
    id: 4,
    url: "/assets/projectsImg/feha.png",
  },
];

const ProjectPreview = () => {
  return (
    <div className="bg-bg1-normal pt-10 pb-5 sm:pt-28 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex max-w-screen-2xl items-center justify-center overflow-hidden">
        <div className="flex gap-5">
          {imgList.map(({ id, url }, index) => (
            <div
              key={id}
              className={`rounded-2xl min-w-80 max-w-xl mt-${
                id % 2 === 0 ? "[30px]" : `[${id}px]`
              }`}
            >
              <Image
                src={url}
                width={380}
                height={442}
                className="min-w-80"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Picture of the author"
                // className="object-fill"
                //   className={`rounded-2xl mt-[${id}px] mt-[30px]`}
                //   className={`rounded-2xl mt-${index % 2 === 0 ? "[30px]" : `[${id}px]`}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="">
      <Wave />
      </div>
    </div>
  );
};

export default ProjectPreview;
