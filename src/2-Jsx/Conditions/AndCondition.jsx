import React from "react";

const AndCondition = () => {
  let y = 2;
  return (
    <div>
      {y === 2 && <h3>This is the message if the condition is true</h3>}
    </div>
  );
};

export default AndCondition;
