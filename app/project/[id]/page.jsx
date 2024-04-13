import { kaushanScript } from "@/app/font";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const ProjecItem = () => {
  return (
    <div className="relative w-full bg-bg2-100 flex items-center justify-center">
      <div className="max-w-screen-2xl">
        <div className="items-start p-36 justify-start flex flex-col w-full max-w-screen-2xl px-10 gap-8">
          <h1
            className={`text-2xl leading-normal 2xl:text-3xl 2xl:leading-normal text-center text-white ${kaushanScript.className}`}
          >
            Kater&apos;s Portfolio
          </h1>
          <div className="flex flex-wrap gap-20 gap-y-10 flex-col md:flex-row">
            <div className="grid text-white71 flex-1 gap-5">
              <h2 className="text-lg italic">Background:</h2>
              <p>
                This project entails the development of a freelancer portfolio
                for a branding expert known as Kater. Kater is a talented
                individual seeking to expand his clientele and reach a wider
                audience by creating a professional portfolio.
              </p>
            </div>
            <div className="flex flex-1 md:justify-center item-center w-fit gap-20 flex-wrap gap-y-8">
              <div className="grid text-white71 h-fit gap-3 md:gap-5">
                <h2 className="text-lg italic">Timeline:</h2>
                <p>Feb 2023 - March 2023</p>
              </div>
              <div className="grid text-white71 h-fit gap-3 md:gap-5">
                <h2 className="text-lg italic">Tools</h2>
                <p>Figma, Nextjs, Calandly</p>
              </div>
            </div>
          </div>
          <div className="grid gap-10">
            <div className="flex mt-14 justify-center">
              <Image
                src="/../assets/projectsimg/views.png"
                fill
                className="w-full !relative max-w-fit max-h-[300px] object-center object-contain"
                alt="views of Kater portfolios"
              />
            </div>
            <div className="grid">
              <div className="grid text-white71 flex-1 gap-5">
                <h2 className="text-xl italic">Research:</h2>
                <h2 className="text-lg italic">Competitive analysis:</h2>
                <p>
                  I selected brand agencies inn place of just freeelancers,
                  because of strucutre, the amount of experince, that is been
                  put to work, to retain their name, compare to just a
                  freelancers, who may just to make money than a name. To
                  identify potential areas were brand agaencies stand out, and
                  getto know what is working, I conducted a competitive analysis
                  of 11 prominent brand agencies websites before beginning the
                  design phase. By taking screenshots and noting common
                  features, I was able to observe how competitors solve similar
                  problems. By interacting with the websites, I also evaluated
                  potential areas for improvement and feature changes.
                </p>
              </div>
            </div>
            <div className="grid gap-10">
              <div className="grid text-white71 flex-1 gap-5">
                <h2 className="text-xl italic">High Fidelity:</h2>
              </div>
              <div className="grid grid-cols-3 gap-5 items-start">
                {portfolioPart.map(({ img, id }) => (
                  <Image
                    src={img}
                    fill
                    key={id}
                    className="w-full !relative max-w-fit object-center object-contain"
                    alt="Picture of the author"
                  />
                ))}
              </div>
              <div className="grid gap-10">
                <div className="grid text-white71 flex-1 gap-5">
                  <h2 className="text-xl italic">Full Page:</h2>
                </div>
                <div className="grid grid-cols-2 gap-5 items-start">
                  {portfolioPartOther.map(({ img, id }) => (
                    <Image
                      src={img}
                      fill
                      key={id}
                      className="w-full !relative object-top object-contain"
                      alt="Picture of the author"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full justify-center mt-20 gap-5">
            <p className="text-lg text-white71">
              Are you convienced: Let Forge your Vision to Reality
            </p>
            <div className="flex items-center justify-center cta gap-5">
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
    img: "/assets/projectsimg/FemiHome.png",
  },
  {
    id: 10,
    img: "/assets/projectsimg/Femi-Design-Project-Detail.png",
  },
];
const portfolioPart = [
  {
    id: 1,
    img: "/assets/projectsimg/KaterDesktop.png",
  },
  {
    id: 2,
    img: "/assets/projectsimg/about.png",
  },
  {
    id: 3,
    img: "/assets/projectsimg/service.png",
  },
  {
    id: 5,
    img: "/assets/projectsimg/process.png",
  },
  {
    id: 6,
    img: "/assets/projectsimg/testimonies.png",
  },
  {
    id: 8,
    img: "/assets/projectsimg/otherProject.png",
  },
];
