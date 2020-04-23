import React from "react";
import "./Tree.css";

const Tree = ({ input }) => {
  // const objectDepth = (object) => {
  //   if (typeof object !== "object" || object === null) return 0;
  //   let pathDepth = [1];
  //   if (!!object["children"]) return Math.max(pathDepth);
  // };

  return (
    <>
      <h1>Tree</h1>
      {/* <p>data: {JSON.stringify(input)}</p>
      <p>depth: {objectDepth(input)}</p> */}
      <div className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 62.5"></svg>
      </div>
    </>
  );
};

export default Tree;
