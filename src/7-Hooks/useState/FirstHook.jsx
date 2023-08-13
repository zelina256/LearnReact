// name import should be in {}
import React, { useState } from "react";
import ArrayHook from "./ArrayHook";
import Counter from "./Counter";
import ObjectHook from "./ObjectHook";
// hooks are called with use
// must  be in the function/component body
// can't call conditionally
const FirstHook = () => {
  let title = "Random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  // useState is a array with 2 argument, 1 - state value(default value), 2- function control value
  //   console.log(useState());
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  //     console.log(value, handler);

  //  destructuring array
  // value + function
  const [text, setText] = useState("random title");

  return (
    <>
      <h1>Hello Hook</h1>
      <div className="container mt-5">
        <h2 className="mb-3">Error - example</h2>
        <h3>{title}</h3>
        <button
          className="btn btn-primary"
          onClick={() =>
            text === "random title"
              ? setText("Hello World")
              : setText("random title")
          }
        >
          Change
        </button>
        <hr />
        <h2 className="mb-3">useState - Basic</h2>
        <p>Change the title by click a button</p>
        {/* state value */}
        <h3>{text}</h3>
        {/* call Function */}
        <button className="btn btn-primary" onClick={handleClick}>
          Change title
        </button>
        <hr />
        <h2 className="mb-3">useState - Array</h2>
        <ArrayHook />
        <hr />
        <h2 className="mb-3">useState - Object</h2>
        <ObjectHook />
        <hr />
        <h2 className="mb-3">useState - Counter</h2>
        <Counter />
        <hr />
      </div>
    </>
  );
};

export default FirstHook;
