import React from "react";

const Node = ({ children, x, y, r }) => {
  return (
    <>
      <circle
        cx={`${x}%`}
        cy={`${y}%`}
        r={!!r ? r : 0.5}
        stroke="black"
        strokeWidth="0.1"
      />
      <g
        fontSize={3}
        fontFamily="sans-serif"
        fill="black"
        stroke="none"
        textAnchor="left"
      >
        <text x={`${x}%`} y={`${y}%`}>
          {children}
        </text>
      </g>
    </>
  );
};

export default Node;
