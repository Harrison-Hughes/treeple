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

function App() {
  return (
    <div className="App">
      <Tree input={data3} />
    </div>
  );
}

export default App;
