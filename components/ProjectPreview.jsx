"use client";
import Image from "next/image";
import React from "react";
import { Wave } from "./Icons";
import VerticalScrolling from "./VerticalScrolling";
import Marquee from "react-fast-marquee";

const imgList = [
  {
    id: 1,
    url: "/assets/projectsImg/alliance.png",
  },
  {
    id: 2,
    url: "/assets/projectsImg/KaterDesktop.png",
  },
  {
    id: 3,
    url: "/assets/projectsImg/phone.png",
  },
  {
    id: 4,
    url: "/assets/projectsImg/joinAttainNow.jpg",
  },
  {
    id: 3,
    url: "/assets/projectsImg/iPhone16.png",
  },
  // {
  //   id: 4,
  //   url: "/assets/projectsImg/iPhone16(3).jpg",
  // },
];

const ProjectPreview = () => {
  return (
    <div className="bg-bg1-normal pt-10 pb-5 sm:pt-28 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex max-w-screen-2xl items-center justify-center overflow-hidden">
        {/* <VerticalScrolling>
          {[...imgList, ...imgList].map(({ id, url }, index) => (
            <div
              key={id}
              className={`rounded-2xl gap-5 min-w-80 max-w-xl mt-${
                id % 2 === 0 ? "[30px]" : `[${id}px]`
              }`}
            >
              <Image
                src={url}
                width={380}
                height={442}
                className="!w-full !max-w-fit !max-h-[300px] object-center object-contain"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Picture of the author"
                // className="object-fill"
                //   className={`rounded-2xl mt-[${id}px] mt-[30px]`}
                //   className={`rounded-2xl mt-${index % 2 === 0 ? "[30px]" : `[${id}px]`}`}
              />
            </div>
          ))}
        </VerticalScrolling> */}
        <div className="ark">
          <Marquee speed={100}>
            {imgList.map(({ id, url }) => (
              <Image
                src={url}
                width={380}
                height={442}
                key={id}
                className="!w-full !max-w-fit !max-h-[300px] object-center object-contain mx-5"
                alt="Picture of the author"
              />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="">
        <Wave />
      </div>
    </div>
  );
};

export default ProjectPreview;
