import React from "react";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import ContainerStroke from "./ContainerStroke";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      img: "/assets/projectsImg/joinAttainNow.jpg",
      tools: "Figma",
      description: "Website Re-Design",
      client: "JoinAttain",
    },
    {
      id: 2,
      img: "/assets/projectsImg/KaterDesktop.png",
      tools: "Figma, Nextjs, Tailwindcss",
      description: "Website Design, Web Developement",
      client: "Kater",
    },
    {
      id: 3,
      // img: "/assets/projectsImg/alliance.png",
      img: "/assets/projectsImg/allianceImg.jpg",
      tools: "Figma, Nextjs, Tailwindcss",
      description: "Website Design, Web Developement",
      client: "Alliance Avenues",
      liveLink: "https://alliance-avenues.netlify.app/"
    },
  ];
  
  return (
    <div className="bg-bg1-normal w-full h-fit flex justify-center py-28" id="projects">
      <div className="relative max-w-screen-2xl gap-12 w-full flex items-start flex-col px-5">
        <SectionHeader>Project</SectionHeader>
        {/* <div className="pt-8 flex flex-wrap justify-center items-center gap-5">
          <Button variant="default" size="lg">
            All
          </Button>
          <Button variant="outline" size="lg" className="text-base md:text-lg">
            Web Development
          </Button>
          <Button variant="outline" size="lg" className="text-base md:text-lg">
            Design
          </Button>
        </div> */}
        <div className="w-full flex flex-col gap-10 items-center justify-between">
          {projectData.map(({ id, img, tools, description, client, liveLink }) => (
            <ProjectCard
              key={id}
              client={client}
              tools={tools} img={img}
              description={description}
              liveLink={liveLink}
            />
          ))}
        </div>
        {/* <Button variant="outline" size="lg">View All</Button> */}
        <ContainerStroke>P</ContainerStroke>
      </div>
    </div>
  );
};

export default Projects;

