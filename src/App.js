import React from "react";
// import Tree from "./Tree";
import "./App.css";

// eslint-disable-next-line
const data1 = {
  name: "1a",
};

// eslint-disable-next-line
const data2 = {
  name: "2a",
  children: [{ name: "aa" }, { name: "ab" }],
};

// eslint-disable-next-line
const data3 = {
  name: "3a",
  children: [
    {
      name: "aa",
      children: [{ name: "aaa" }, { name: "aab" }],
    },
    {
      name: "ab",
      children: [{ name: "aba" }, { name: "abb" }],
    },
  ],
};

const objectDepth = (object) => {
  if (typeof object !== "object" || object === null) return 0;
  let pathDepths = [];
  const addPathDepth = (depth) => pathDepths.push(depth);
  nodeChildren(object, 0, addPathDepth);
  let orderedPathDepths = pathDepths.sort((x, y) => y - x);
  return orderedPathDepths[0];
};

const nodeChildren = (node, depthCounter, endOfPathFunc) => {
  if (!!node["children"]) {
    node["children"].map((node) =>
      nodeChildren(node, depthCounter + 1, endOfPathFunc)
    );
  } else {
    endOfPathFunc(depthCounter + 1);
  }
};

function App() {
  return (
    <div className="App">
      {/* <Tree input={data2} /> */}
      <p>
        {"egg"} : {objectDepth("egg")}
      </p>
      <p>
        {JSON.stringify(data1)} : {objectDepth(data1)}
      </p>
      <p>
        {JSON.stringify(data2)} : {objectDepth(data2)}
      </p>
      <p>
        {JSON.stringify(data3)} : {objectDepth(data3)}
      </p>
    </div>
  );
}

export default App;
