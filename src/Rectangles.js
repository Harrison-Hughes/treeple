import React from "react";
import "./Tree.css";

const Rectangles = ({ x, y, colours }) => {
  const rectangleGenerator = ({ x, y, colours }) => {
    let [output, colourIndex] = [[], 0];
    for (let row = 1; row <= y; row++) {
      for (let column = 1; column <= x; column++) {
        output.push(
          <rect
            x={`${(100 / x) * (column - 1)}%`}
            y={`${(100 / y) * (row - 1)}%`}
            width={`${100 / x}%`}
            height={`${100 / y}%`}
            fill={colours[colourIndex % colours.length]}
            key={output.length}
          />
        );
        colourIndex += 1;
      }
    }
    return output.map((rectangle) => {
      return rectangle;
    });
  };

  return (
    <>
      <h1>Rectangles</h1>
      <div className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 62.5">
          {rectangleGenerator({
            x: x,
            y: y,
            colours: colours,
          })}
        </svg>
      </div>
    </>
  );
};

export default Rectangles;
