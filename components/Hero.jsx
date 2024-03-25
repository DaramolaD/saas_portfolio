import React from "react";
import { Button } from "./ui/button";
import { kaushanScript } from "@/app/font";
import { CalendarIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <div className="relative w-full bg-bg2-100 h-full max-h-[100vh] pb-[100px] pt-[200px] flex items-center justify-center">
      <div className="max-w-screen-2xl">
        <div className="items-center justify-center flex flex-col w-full max-w-screen-2xl px-10 gap-8">
          <h1
            className={`text-6xl leading-normal 2xl:text-7xl 2xl:leading-normal text-center text-white ${kaushanScript.className}`}
          >
            Fuel Your
            <span className="text-primary"> Startup&apos;s Success</span> <br />
            with Frontend Expertise
          </h1>
          <p className="text-white71 text-2xl 2xl:text-3xl 2xl:leading-normal text-center font-light leading-normal max-w-[800px]">
            Let Me Turbocharge Your Startup&apos;s Digital Journey: <br /> Drive
            Growth and Scale Your Product
          </p>
          <div className="flex items-center justify-center cta gap-5">
            <Button variant="default" size="lg">
              <span className="text-lg">Schedule A Call</span>
              <CalendarIcon className="ml5" />
            </Button>
            <Button variant="outline" size="lg">
              <span className="text-lg">Projects</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
