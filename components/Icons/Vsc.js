import * as React from "react";
const SvgVsc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 36"
    {...props}
  >
    <path
      fill="url(#VSC_svg__a)"
      d="M22.002 5.922c0-.824-.844-.824-1.219-.721.525-.453 1.14-.343 1.36-.206l5.068 2.718c.483.26.789.798.789 1.389v17.882c0 .599-.314 1.143-.807 1.398l-4.77 2.467c-.328.154-1.04.535-1.64 0 .75.154 1.156-.43 1.218-.824z"
    />
    <path
      fill="url(#VSC_svg__b)"
      d="M20.844 5.186C21.242 5.1 22 5.14 22 5.922v6.155L6.634 24.792a.614.614 0 0 1-.875-.085l-1.584-1.875a.77.77 0 0 1 .039-1.023l16.57-16.608z"
    />
    <path
      fill="url(#VSC_svg__c)"
      d="M22.002 23.972 6.634 11.257a.614.614 0 0 0-.876.086l-1.584 1.874a.77.77 0 0 0 .039 1.024l16.57 16.608c.749.154 1.155-.43 1.218-.824z"
    />
    <defs>
      <linearGradient
        id="VSC_svg__a"
        x1={24.392}
        x2={24.392}
        y1={4.875}
        y2={31.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32B5F1" />
        <stop offset={1} stopColor="#2B9FED" />
      </linearGradient>
      <linearGradient
        id="VSC_svg__b"
        x1={22.002}
        x2={3.63}
        y1={8.188}
        y2={22.287}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0F6FB3" />
        <stop offset={0.271} stopColor="#1279B7" />
        <stop offset={0.421} stopColor="#1176B5" />
        <stop offset={0.618} stopColor="#0E69AC" />
        <stop offset={0.855} stopColor="#0F70AF" />
        <stop offset={1} stopColor="#0F6DAD" />
      </linearGradient>
      <linearGradient
        id="VSC_svg__c"
        x1={4.99}
        x2={23.289}
        y1={12.36}
        y2={26.212}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1791D2" />
        <stop offset={1} stopColor="#1173C5" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgVsc;
