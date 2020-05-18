import React from "react";
import Tree from "./Tree";
import "./App.css";

// eslint-disable-next-line
const data1 = {
  id: 1,
  name: "1a",
};

// eslint-disable-next-line
const data2 = {
  id: 1,
  name: "2a",
  children: [
    { id: 2, name: "aa" },
    { id: 3, name: "ab" },
  ],
};

// eslint-disable-next-line
const data3 = {
  id: 1,
  name: "3a",
  children: [
    {
      id: 2,
      name: "aa",
      children: [
        { id: 3, name: "aaa" },
        { id: 4, name: "aab" },
      ],
    },
    {
      id: 5,
      name: "ab",
      children: [
        { id: 6, name: "aba" },
        { id: 7, name: "abb" },
      ],
    },
  ],
};

// eslint-disable-next-line
const data4 = {
  id: 1,
  name: "3a",
  children: [
    {
      id: 2,
      name: "aa",
      children: [
        { id: 3, name: "aaa" },
        { id: 4, name: "aab" },
      ],
    },
    {
      id: 5,
      name: "ab",
      children: [
        { id: 6, name: "aba" },
        { id: 7, name: "abb" },
      ],
    },
    {
      id: 8,
      name: "ac",
    },
  ],
};

// eslint-disable-next-line
const data5 = {
  id: 1,
  name: "a",
  children: [
    {
      id: 2,
      name: "aa",
      children: [
        { id: 3, name: "aaa" },
        {
          id: 4,
          name: "aab",
          children: [
            { id: 10, name: "aaba" },
            { id: 11, name: "aabb" },
            { id: 12, name: "aabc" },
          ],
        },
        { id: 14, name: "aac" },
        { id: 15, name: "aad" },
        { id: 16, name: "aae" },
      ],
    },
    {
      id: 5,
      name: "ab",
      children: [
        { id: 6, name: "aba" },
        { id: 7, name: "abb", children: [{ id: 9, name: "ABBA" }] },
        { id: 13, name: "abc" },
      ],
    },
    {
      id: 8,
      name: "ac",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>treeple</h1>
      <Tree input={data5} width={100} height={62.5} />
    </div>
  );
}

export default App;
