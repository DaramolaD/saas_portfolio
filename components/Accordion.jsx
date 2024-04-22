import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AccordionContainer = () => {
  return (
    <div className="md:pl-10 max-w-[750px] w-full">
      {serviceListing.map(({ id, title, list, item }) => (
        <Accordion key={id} type="single" collapsible className="w-full bg-gradient-to-t from-bg2-300 to-bg2-320 rounded-md p-5 text-white">
          <AccordionItem value={item} className="border-none">
            <AccordionTrigger className="text-xl 2xl:text-2xl 2xl:leading-normal hover:text-primary-normalHover text-left">{title}</AccordionTrigger>
            {list.map(({ list, id }) => (
              <AccordionContent className="text-lg 2xl:text-xl 2xl:leading-normal" key={id}><li>{list}</li></AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionContainer;

const serviceListing = [
  {
    id: 1,
    title: "Design Services",
    item: "design",
    list: [
      {
        id: 1,
        list: "UI/UX Design",
      },
      // {
      //   id: 2,
      //   list: "Wireframing and Prototyping",
      // },
      // {
      //   id: 3,
      //   list: "User Research and Usability Testing",
      // },
    ],
  },
  {
    id: 2,
    title: "Development Services",
    item: "development",
    list: [
      {
        id: 1,
        list: "Frontend Development",
      },
      {
        id: 2,
        list: "Dashboard Development",
      },
      {
        id: 3,
        list: "E-commerce Solutions",
      },
      // {
      //   id: 4,
      //   list: "Accessibility Compliance",
      // },
      {
        id: 4,
        list: "Performance Optimization",
      },
      {
        id: 5,
        list: "Integration Services",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Consultation and Support Services",
  //   item: "consulatation",
  //   list: [
  //     {
  //       id: 1,
  //       list: "Consultation and Strategy",
  //     },
  //     {
  //       id: 2,
  //       list: "Training and Workshops",
  //     },
  //     {
  //       id: 3,
  //       list: "Maintenance and Support",
  //     },
  //   ],
  // },
];
