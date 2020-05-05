import React from "react";
import Node from "./Node";
import Branch from "./Branch";
import "./Tree.css";

const treeScanner = (nodeData) => {
  if (typeof nodeData !== "object" || nodeData === null) return 0;

  const scan = (node, depthCounter, nodeExists) => {
    nodeExists(depthCounter, node["id"]);
    if (!!node["children"]) {
      node["children"].map((node) => scan(node, depthCounter + 1, nodeExists));
    }
  };

  let distribution = [];
  const registerNode = (depth, id) => {
    if (!!distribution[depth]) distribution[depth].push(id);
    else distribution[depth] = [id];
  };
  scan(nodeData, 0, registerNode);
  return { depth: distribution.length, distribution: distribution };
};

const genCoordsWithIDs = (nodeData) => {
  const distribution = treeScanner(nodeData)["distribution"];
  // input (distribution) -> [[1], [2, 5], [3, 4, 6, 7]]
  const depth = distribution.length;
  let output = {};
  for (let tier = 0; tier < depth; tier++) {
    let y = (100 / (depth + 1)) * (tier + 1);
    let nodesAcross = distribution[tier].length;
    for (let node = 0; node < nodesAcross; node++) {
      let x = (100 / (nodesAcross + 1)) * (node + 1);
      output[distribution[tier][node]] = { x: x, y: y };
    }
  }
  return output;
  // output -> {1: {x: 50, y: 25}, 2: {x: 33.3, y: 50}, ...}
};

const renderNodes = (nodes, coords) => {
  const iterativeNodeRegister = (node, addNode) => {
    let [nodeText, xCoord, yCoord] = [
      node["name"],
      coords[node["id"]]["x"],
      coords[node["id"]]["y"],
    ];
    addNode(nodeText, xCoord, yCoord, node["id"]);
    if (!!node["children"]) {
      node["children"].map((node) => iterativeNodeRegister(node, addNode));
    }
  };

  let nodeElementContainer = [];
  const addNode = (nodeText, xCoord, yCoord, id) => {
    nodeElementContainer.push(
      <Node x={xCoord} y={yCoord} key={id}>
        {nodeText}
      </Node>
    );
  };

  iterativeNodeRegister(nodes, addNode);
  return nodeElementContainer.map((node) => node);
};

const renderBranches = (nodes, coords) => {
  const iterativeBranchRegister = (node, addBranch) => {
    let [x1, y1] = [coords[node["id"]]["x"], coords[node["id"]]["y"]];
    if (!!node["children"]) {
      for (let i = 0; i < node["children"].length; i++) {
        let childNodeID = node["children"][i]["id"];
        let [x2, y2] = [coords[childNodeID]["x"], coords[childNodeID]["y"]];
        addBranch(x1, x2, y1, y2, childNodeID);
        iterativeBranchRegister(node["children"][i], addBranch);
      }
    }
  };

  let branchElementContainer = [];
  const addBranch = (x1, x2, y1, y2, id) => {
    branchElementContainer.push(
      <Branch x1={x1} x2={x2} y1={y1} y2={y2} key={id}></Branch>
    );
  };

  iterativeBranchRegister(nodes, addBranch);
  return branchElementContainer.map((branch) => branch);
};

const renderDender = (nodeData) => {
  const coordsOfIDs = genCoordsWithIDs(nodeData);
  // return renderNodes(nodeData, coordsOfIDs);
  return [
    renderNodes(nodeData, coordsOfIDs),
    renderBranches(nodeData, coordsOfIDs),
  ].map((x) => x);
};

const Tree = ({ input, height, width }) => {
  return (
    <div className="svgContainer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
      >
        {renderDender(input)}
      </svg>
    </div>
  );
};

export default Tree;
