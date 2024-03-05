import * as React from "react";
const SvgZoom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 36"
    {...props}
  >
    <rect width={32} height={35} y={0.5} fill="#4087FC" rx={10} />
    <path
      fill="#fff"
      d="M7.162 10.5c-.8 0-1.448.8-1.448 1.786v8.66c0 2.515 1.653 4.554 3.692 4.554l8.575-.09c.8 0 1.448-.799 1.448-1.785v-8.75c0-2.515-1.962-4.375-4-4.375zM21.385 13.91c-.517.559-.814 1.366-.814 2.215v3.624c0 .849.297 1.656.814 2.216l3.22 3.1c.654.709 1.68.135 1.68-.94V11.92c0-1.075-1.026-1.648-1.68-.94z"
    />
  </svg>
);
export default SvgZoom;
