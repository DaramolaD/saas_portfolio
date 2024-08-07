import * as React from "react";
const SvgCalendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#344054"
      d="M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M9 6v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3v4H6V6zm17 20H6V12h20zm-4.792-10.707a1 1 0 0 1 0 1.415l-6 6a1 1 0 0 1-1.415 0l-3-3a1 1 0 1 1 1.415-1.415l2.292 2.293 5.293-5.293a1 1 0 0 1 1.415 0"
    />
  </svg>
);
export default SvgCalendar;
