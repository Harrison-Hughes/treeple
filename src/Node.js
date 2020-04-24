import React from "react";

const Node = ({ x, y, r, text }) => {
  return (
    <>
      <circle cx={x} cy={y} r={r} stroke="black" strokeWidth="0.1" />
      <g
        fontSize={4}
        fontFamily="sans-serif"
        fill="black"
        stroke="none"
        textAnchor="middle"
      >
        <text x={x} y={y}>
          {text}
        </text>
      </g>
    </>
  );
};

export default Node;
