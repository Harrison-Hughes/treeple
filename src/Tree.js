import React from "react";
import Node from "./Node";
import "./Tree.css";

const treeDepth = (object) => {
  const nodeChildren = (node, depthCounter, endOfPathFunc) => {
    if (!!node["children"]) {
      node["children"].map((node) =>
        nodeChildren(node, depthCounter + 1, endOfPathFunc)
      );
    } else {
      endOfPathFunc(depthCounter + 1);
    }
  };
  if (typeof object !== "object" || object === null) return 0;
  let pathDepths = [];
  const addPathDepth = (depth) => pathDepths.push(depth);
  nodeChildren(object, 0, addPathDepth);
  let orderedPathDepths = pathDepths.sort((x, y) => y - x);
  return orderedPathDepths[0];
};

const renderYCoords = (data) => {
  let coords = [];
  const tiers = treeDepth(data);
  for (let tier = 0; tier < tiers; tier++) {
    coords.push((100 / (tiers + 1)) * (tier + 1));
  }
  return coords;
};

const renderTiers = (data) => {
  let output = [];
  const yCoords = renderYCoords(data);
  for (let i = 0; i < yCoords.length; i++) {
    output.push(
      <line
        x1="0%"
        y1={`${yCoords[i]}%`}
        x2="100%"
        y2={`${yCoords[i]}%`}
        stroke="rgb(255,0,0)"
        strokeWidth="0.5"
        key={i}
      />
    );
  }
  return output.map((line) => {
    return line;
  });
};

const renderNodes = (data) => {
  let tieredNodes = [];
  return <Node x={"50%"} y={`${100 / 4}%`} r={1} text={"node"} />;
};

const Tree = ({ input }) => {
  console.log(renderYCoords(input));
  return (
    <>
      <h1>Tree</h1>
      <div className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 62.5">
          {renderTiers(input)}
          {renderNodes(input)}
        </svg>
      </div>
    </>
  );
};

export default Tree;
