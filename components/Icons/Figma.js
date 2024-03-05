import * as React from "react";
const SvgFigma = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 36"
    {...props}
  >
    <g clipPath="url(#Figma_svg__a)">
      <path
        fill="#0ACF83"
        d="M6.001 35.5C9.313 35.5 12 32.887 12 29.667v-5.834H6.001c-3.311 0-5.999 2.614-5.999 5.834s2.688 5.833 6 5.833"
      />
      <path
        fill="#A259FF"
        d="M.002 18c0-3.22 2.688-5.833 6-5.833H12v11.666H6.001C2.69 23.833.002 21.22.002 18"
      />
      <path
        fill="#F24E1E"
        d="M.002 6.333C.002 3.113 2.69.5 6.002.5H12v11.667H6.001C2.69 12.167.002 9.553.002 6.333"
      />
      <path
        fill="#FF7262"
        d="M12 .5h5.999c3.311 0 5.999 2.613 5.999 5.833s-2.688 5.834-6 5.834H12z"
      />
      <path
        fill="#1ABCFE"
        d="M23.998 18c0 3.22-2.688 5.833-6 5.833C14.689 23.833 12 21.22 12 18s2.688-5.833 5.999-5.833S23.998 14.78 23.998 18"
      />
    </g>
    <defs>
      <clipPath id="Figma_svg__a">
        <path fill="#fff" d="M0 .5h24v35H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFigma;
