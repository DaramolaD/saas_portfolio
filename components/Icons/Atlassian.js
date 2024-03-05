import * as React from "react";
const SvgAtlassian = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 36"
    {...props}
  >
    <path
      fill="url(#Atlassian_svg__a)"
      d="M11.117 16.998c-.358-.419-.917-.395-1.161.138L4.074 30.003a.83.83 0 0 0 .031.748.69.69 0 0 0 .598.365h8.191a.675.675 0 0 0 .63-.425c1.766-3.994.696-10.067-2.407-13.693"
    />
    <path
      fill="#2681FF"
      d="M15.433 5.296c-3.29 5.7-3.073 12.015-.906 16.755l3.95 8.64a.7.7 0 0 0 .629.425h8.19c.245 0 .47-.138.6-.365a.83.83 0 0 0 .03-.748S16.906 5.894 16.629 5.29c-.248-.54-.877-.547-1.196.005"
    />
    <defs>
      <linearGradient
        id="Atlassian_svg__a"
        x1={10.107}
        x2={1.066}
        y1={14.672}
        y2={23.552}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset={0.923} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgAtlassian;
