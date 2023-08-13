import React, { useState, useEffect } from "react";

const CleanFun = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <div>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </div>
  );
};

export default CleanFun;
