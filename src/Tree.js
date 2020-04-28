import React from "react";
import Node from "./Node";
import Branch from "./Branch";
import "./Tree.css";

const treeScanner = (object) => {
  if (typeof object !== "object" || object === null) return 0;

  const scan = (node, depthCounter, nodeExists) => {
    nodeExists(depthCounter);
    if (!!node["children"]) {
      node["children"].map((node) => scan(node, depthCounter + 1, nodeExists));
    }
  };

  let distribution = [];
  const registerNode = (depth) => {
    if (!!distribution[depth]) distribution[depth] += 1;
    else distribution[depth] = 1;
  };
  scan(object, 0, registerNode);
  return { depth: distribution.length, distribution: distribution };
};

const genYCoords = (data) => {
  let coords = [];
  const tiers = treeScanner(data)["depth"];
  for (let tier = 0; tier < tiers; tier++) {
    coords.push((100 / (tiers + 1)) * (tier + 1));
  }
  return coords;
};

const genXCoords = (data) => {
  let coords = [];
  const distribution = treeScanner(data)["distribution"];
  for (let tier = 0; tier < distribution.length; tier++) {
    let numOfNodes = distribution[tier];
    coords.push([]);
    for (let nodeNum = 0; nodeNum < numOfNodes; nodeNum++) {
      coords[tier].push((100 / (numOfNodes + 1)) * (nodeNum + 1));
    }
  }
  return coords;
};

const renderTiers = (data) => {
  let output = [];
  const yCoords = genYCoords(data);
  for (let i = 0; i < yCoords.length; i++) {
    output.push(
      <Branch x1="0" y1={yCoords[i]} x2="100" y2={yCoords[i]} key={i} />
    );
  }
  return output.map((line) => {
    return line;
  });
};

const formatInputDataToIncludeCoords = (input) => {
  const [verticalCoords, horizontalCoords] = [
    genXCoords(input),
    genYCoords(input),
  ];
  let modifiedData = input;
  for (let tier = 0; tier < horizontalCoords.length; tier++) {
    for (let node = 0; node < verticalCoords[tier].length; node++) {
      console.log("tier, node", tier, node);
      modifiedData["x"] = verticalCoords[tier][node];
      modifiedData["y"] = horizontalCoords[tier];
      console.log("mod data", modifiedData);
    }
  }
  console.log("mod data", modifiedData);
  return 0;
};

const renderNodes = (data) => {
  const dataWithCoords = formatInputDataToIncludeCoords(data);
  return (
    <Node x={"50%"} y={`${100 / 4}%`}>
      hi
    </Node>
  );
};

const renderBranches = (data) => {
  const dataWithCoords = formatInputDataToIncludeCoords(data);
};

const Tree = ({ input }) => {
  return (
    <div className="svgContainer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 62.5">
        {renderTiers(input)}
        {renderNodes(input)}
      </svg>
    </div>
  );
};

export default Tree;
