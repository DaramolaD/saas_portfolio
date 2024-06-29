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
            Your Next.js and UI/UX Design Partner for SaaS Success
          </p>
        </div>
        <div className=" pt-5">
          <p className="aboutPara text-base !leading-[1.8] lg:leading-normal lg:text-2xl text-white71">
            Hi, I&apos;m Daniel, a{" "}
            <span className="!text-white71 italic underline pr-[3px]">
              frontend developer{" "} 
            </span>{" "}{" "}passionate about helping startups thrive online. With a strong
            background in{" "}
            <span className="!text-white71 italic underline">Next.js</span> and{" "}
            <span className="!text-white71 italic underline">UI/UX design</span>
            , I tackle{" "}
            <span className="!text-white71 italic underline">
              technical hurdles
            </span>{" "}
            so you can concentrate on growing your{" "}
            <span className="!text-white71 italic underline">business</span>.
          </p>
          <br />
          <div className="grid gap-2">
            <div className="grid gap-1 text-white71">
              <h4 className="text-white text-lg sm:text-xl lg:text-2xl lg:leading-normal pt-1 leading-normal">
                Why Choose Me:
              </h4>
              {/* <div className="flex pl-8">
                <ul className="!list-disc">
                  <li>
                    <span className="text-white pl-2 ">
                      I understand the unique challenges startups face,
                      including limited budgets, tight deadlines, and the need
                      to make a significant impact quickly.
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-white pl-2 ">
                      My solutions not only look great but also drive engagement
                      and growth, helping your startup succeed in a competitive
                      market.
                    </span>{" "}
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <li className="aboutPara text-base !leading-[1.8] lg:leading-normal lg:text-xl text-white71">
            <span className="italic">Understanding Startup Challenges:</span> I
            know the challenges you face, from tight{" "}
            <span className="!text-white71 italic underline">budgets</span> to
            pressing{" "}
            <span className="!text-white71 italic underline">deadlines</span>,
            and the need to make a significant{" "}
            <span className="!text-white71 italic underline">impact</span>{" "}
            quickly.
          </li>
          <li className="aboutPara text-base !leading-[1.8] lg:leading-normal lg:text-xl text-white71">
            <span className="italic">Impactful Solutions:</span> My designs not
            only look{" "}
            <span className="!text-white71 italic underline pr-[3px]">great</span> but
            also drive{" "}
            <span className="!text-white71 italic underline">engagement</span>{" "}
            and <span className="!text-white71 italic underline">growth</span>.
          </li>
          <li className="aboutPara text-base !leading-[1.8] lg:leading-normal lg:text-xl text-white71">
            <span className="italic">Flexible Collaboration:</span> Whether
            working with{" "}
            <span className="!text-white71 italic underline">teams</span> or{" "}
            <span className="!text-white71 italic underline">
              independently
            </span>
            , I adapt to{" "}
            <span className="!text-white71 italic underline">agile</span>{" "}
            environments to elevate your SaaS product.
          </li>
          <p className="aboutPara text-base !leading-[1.8] lg:leading-normal lg:text-2xl text-white71">
            <br /> Ready to transform your product? Let&apos;s get started!
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
