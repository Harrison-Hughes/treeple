import React from "react";
import Tree from "./Tree";
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

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <Tree input={data1} />
      <Tree input={data2} /> */}
      <Tree input={data3} width={100} height={62.5} />
    </div>
  );
}

export default App;
