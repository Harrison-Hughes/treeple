import React from "react";

const Sketch = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
        <path
          d="M 100 350 q 400 -300 300 0"
          stroke="blue"
          strokeWidth="1"
          fill="none"
        />
        <g
          fontSize="30"
          fontFamily="sans-serif"
          fill="black"
          stroke="none"
          textAnchor="middle"
        >
          <text x="100" y="350" dx="-40">
            Apple
          </text>
          <text x="250" y="50" dy="-10">
            B
          </text>
          <text x="400" y="350" dx="30">
            C
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Sketch;
