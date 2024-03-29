import React from "react";
import { Button } from "./ui/button";
import { kaushanScript } from "@/app/font";
import { CalendarIcon } from "@radix-ui/react-icons";

const About = () => {
  return (
    <div className="bg-bg1-normal w-full flex justify-center py-20 pb-24" id="about">
      <div className="flex flex-col px-5 max-w-screen-2xl w-full">
        <div className="head text-white">
          <h3 className="text-white71 text-4xl lg:text-5xl lg:leading-normal leading-normal">
            Meet
            <span
              className={`${kaushanScript.className} ml-2 text-6xl text-white`}
            >
              Daniel
            </span>
          </h3>
          <p className="text-xl sm:text-2xl lg:text-3xl lg:leading-normal italic pt-1 leading-normal">
            Your Startup&apos;s Next.js ~ UI/UX Solution Partner
          </p>
        </div>
        <div className=" pt-5">
          <p className="aboutPara text-base leading-normal lg:leading-normal lg:text-2xl text-white71">
            Hey there! I&apos;m Daniel, and I&apos;m here to <span>turbocharge </span>
            your startup&apos;s digital journey. With <span>Next.js </span>
            expertise and a knack for intuitive <span>UI/UX design</span>, I
            solve your startup&apos;s tech headaches so you can focus on
            <span> growth</span>.
          </p>
          <p className="aboutPara text-base leading-normal lg:leading-normal lg:text-2xl text-white71">
            <br /> Startups face tight budgets, looming <span>deadlines</span>,
            and the pressure to stand out. Let me ease those{" "}
            <span>burdens</span>. Whether it&apos;s lightning-fast{" "}
            <span>performance</span> or captivating{" "}
            <span>user experiences</span>, I tailor solutions to fit your{" "}
            <span>needs</span>.
          </p>
          <p className="aboutPara text-base leading-normal lg:leading-normal lg:text-2xl text-white71">
            <br /> Ready to take your startup to the <span>next level?</span>
          </p>
        </div>
        <div className="cta flex flex-wrap items-start mt-8 gap-5">
          
          <p className="aboutPara text-base leading-normal lg:leading-normal lg:text-2xl text-white71">
            Don&apos;t miss out - your success story starts today.
          </p>
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
