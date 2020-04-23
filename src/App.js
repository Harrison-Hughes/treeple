import React from "react";
import Tree from "./Tree";
import "./App.css";
// eslint-disable-next-line
const data1 = {
  name: "a",
};
// eslint-disable-next-line
const data2 = {
  name: "a",
  children: [
    {
      name: "aa",
    },
    { name: "ab" },
  ],
};
// eslint-disable-next-line
const data3 = {
  name: "a",
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
      <Tree input={data1} />
    </div>
  );
}

export default App;
