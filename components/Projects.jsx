import React from "react";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import ContainerStroke from "./ContainerStroke";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      img: "/assets/projectsImg/SynflowCheck.jpg",
      tools: "Figma, Nextjs, Tailwind css",
      description:
        "SynFlow is a fintech management startup designed to help startups streamline their finances.",
      project: [
        { id: 1, text: "Website Design" },
        { id: 2, text: "Development" },
      ],
      client: "SynFlow",
      status: "Inprogress"
    },
    {
      id: 2,
      img: "/assets/projectsImg/JoinAttainCheck.jpg",
      tools: "Figma",
      description: "Attain is a e-commerce company that offers an one-stop shop for convenience store owners",
      project: [{ id: 1, text: "Website Re-Design" }],
      client: "JoinAttain",
    },
    {
      id: 3,
      img: "/assets/projectsImg/KaterCheck.jpg",
      tools: "Figma, Nextjs, Tailwindcss",
      description:
        "This project entails the design and development of a freelancer portfolio for a branding expert known as Kater.",
      project: [
        { id: 1, text: "Website Design" },
        { id: 2, text: "Development" },
      ],
      client: "Kater",
    },
    {
      id: 4,
      // img: "/assets/projectsImg/alliance.png",
      img: "/assets/projectsImg/allianceImg.jpg",
      tools: "Figma, Nextjs, Tailwindcss",
      description:
        "This project entails the design and development of a website for a construction company.",
      project: [
        { id: 1, text: "Website Design" },
        { id: 2, text: "Development" },
      ],
      client: "Alliance Avenues",
      liveLink: "https://alliance-avenues.netlify.app/",
    },
  ];

  return (
    <div
      className="bg-bg1-normal w-full h-fit flex justify-center py-28"
      id="projects"
    >
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
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 items-stretch justify-between">
          {projectData.map(
            ({ id, img, tools, description, project, client, liveLink, status }) => (
              <ProjectCard
                key={id}
                client={client}
                tools={tools}
                img={img}
                description={description}
                project={project}
                liveLink={liveLink}
                status={status}
              />
            )
          )}
        </div>
        {/* <Button variant="outline" size="lg">View All</Button> */}
        <ContainerStroke>P</ContainerStroke>
      </div>
    </div>
  );
};

export default Projects;
