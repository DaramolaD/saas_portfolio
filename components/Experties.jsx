import React from "react";

const Experties = () => {
  return (
    <div className="bg-bg2-100 p-4 w-full flex justify-center py-5 overflow-hidden">
      <div className="flex gap-5 max-w-screen-2xl w-full justify-between items-center overflow-hidden">
        {expertise.map(({ id, title }) => (
          <p
            key={id}
            className="text-white text-lg 2xl:text-xl 2xl:leading-normal whitespace-nowrap p-3 px-5 rounded-full border-primary-lightActive border-2 opacity-50"
          >
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Experties;

const expertise = [
  {
    id: 1,
    title: "User Centeric Design",
  },
  {
    id: 2,
    title: "Scalability",
  },
  {
    id: 3,
    title: "Responsive Design",
  },
  {
    id: 4,
    title: "Conversion Optimization",
  },
  {
    id: 5,
    title: "Performance Optimization",
  },
  {
    id: 6,
    title: "Technological Proficiency",
  },
  {
    id: 7,
    title: "Collaboration Skills",
  },
  {
    id: 8,
    title: "Communication",
  },
  {
    id: 9,
    title: "Problem Solving",
  },
  {
    id: 10,
    title: "Adaptability",
  },
  {
    id: 11,
    title: "Attention to Detail",
  },
  {
    id: 12,
    title: "Project Ownership",
  },
];
