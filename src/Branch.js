import React from "react";

const Branch = ({ x1, x2, y1, y2, ...props }) => {
  return (
    <line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="rgb(255,0,0)"
      strokeWidth="0.2"
      {...props}
    />
  );
};

{
  /* <path
  d="M 10 10 C 10 30, 50 30, 50 50"
  stroke="black"
  fill="transparent"
  strokeWidth="0.1"
/>; */
}
export default Branch;
