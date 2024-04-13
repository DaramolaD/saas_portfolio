import React from "react";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import ContainerStroke from "./ContainerStroke";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-bg1-normal w-full h-fit flex justify-center py-28" id="projects">
      <div className="relative max-w-screen-2xl gap-12 w-full flex items-start flex-col px-5">
        <SectionHeader>Project</SectionHeader>
        <div className="pt-8 flex flex-wrap justify-center items-center gap-5">
          <Button variant="default" size="lg">
            All
          </Button>
          <Button variant="outline" size="lg" className="text-base md:text-lg">
            Web Development
          </Button>
          <Button variant="outline" size="lg" className="text-base md:text-lg">
            Design
          </Button>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-between">
          {projectData.map(({ id, img, tools, description, client }) => (
            <ProjectCard
              key={id}
              client={client}
              tools={tools} img={img}
              description={description}
            />
          ))}
        </div>
        <Button variant="outline" size="lg">View All</Button>
        <ContainerStroke>P</ContainerStroke>
      </div>
    </div>
  );
};

export default Projects;

const projectData = [
  {
    id: 1,
    img: "/../assets/projectsimg/TraquilHaven.png",
    tools: "UIUX, NextJs",
    description: "Website Design, Web Developement",
    client: "Dreamy",
  },
  {
    id: 2,
    img: "/../assets/projectsimg/KaterDesktop.png",
    tools: "UIUX, NextJs",
    description: "Website Design, Web Developement",
    client: "Kater",
  },
  {
    id: 3,
    img: "/../assets/projectsimg/alliance.png",
    tools: "UIUX, NextJs",
    description: "Website Design, Web Developement",
    client: "Alliance Avenues",
  },
];
