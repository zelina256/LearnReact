import React from "react";

const IfCondition = () => {
  const x = 2;
  if (x > 2) {
    return (
      <div>
        {" "}
        <h1>This is message 1</h1>
      </div>
    );
  } else {
    <h2>This is message 2</h2>;
  }
};

export default IfCondition;
