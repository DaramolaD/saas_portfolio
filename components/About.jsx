import React from "react";
import { Button } from "./ui/button";
import { kaushanScript, syne } from "@/app/font";
import { CalendarIcon } from "@radix-ui/react-icons";

const About = () => {
  return (
    <div
      className="bg-bg1-normal w-full flex justify-center py-20 pb-24"
      id="about"
    >
      <div className="flex flex-col px-5 max-w-screen-2xl w-full">
        <div className="head text-white gap-2">
          <div className="flex items-center">
            <h3 className="text-white71 text-4xl lg:text-5xl lg:leading-normal leading-normal">
              Meet
            </h3>
            <h3
              className={`${syne.className} !italic ml-2 text-6xl bg-gradient-to-b from-primary to-white bg-clip-text text-transparent w-full`}
            >
              Daniel
            </h3>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl lg:leading-normal italic pt-1 leading-normal">
            Your Startup&apos;s Next.js ~ UI/UX Solution Partner
          </p>
        </div>
        <div className=" pt-5">
          <p className="aboutPara text-base !leading-[1.8] lg:leading-normal lg:text-2xl text-white71">
            Hi! I&apos;m Daniel, a <span>frontend developer</span> dedicated to
            helping startups succeed online. With expertise in{" "}
            <span>Next.js and UI/UX design</span>, I solve{" "}
            <span>technical challenges</span> so you can focus on expanding your{" "}
            <span>business</span>.
          </p>
          <br />
          <p className="aboutPara text-base !leading-[1.8] lg:leading-normal lg:text-2xl text-white71">
          Startups often face limited <span>budgets</span>, tight{" "}
            <span>deadlines</span>, and the pressure to make a significant <span>impact</span>{" "}quickly.
            I&apos;m here to <span>help</span>. I build fast, responsive,
            scalable, optimize, user-centric web applications that not only look
            great but also drive <span>engagement and growth.</span>
          </p>
          <p className="aboutPara text-base !leading-[1.8] lg:leading-normal lg:text-2xl text-white71">
            <br /> Let&apos;s work together to elevate your startup&apos;s to
            the <span>next level?</span>
          </p>
        </div>
        <div className="cta flex flex-wrap items-start mt-8 gap-5">
          <Button variant="default" size="lg" className="mr-5 ">
            <span className="text-lg">Schedule A Call</span>
            <CalendarIcon className="ml5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
