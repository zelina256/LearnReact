import React, { useEffect, useState } from "react";

//  by default runs after every re-render
const EffectBasic = () => {
  const [value, setValue] = useState(0);
  //   useEffect(() => {
  //     console.log("call useEffect");
  //     document.title = `New messages ${value}`;
  //   });
  //   useEffect(() => {
  // console.log("call useEffect");
  // if (value > 1) {
  //   document.title = `New messages ${value}`;
  // }
  // value > 1 && (document.title = `New messages ${value}`);
  //   }, []);
  //   list of dependency
  //   run only in initial render
  useEffect(() => {
    console.log("call useEffect");
    // if (value > 1) {
    //   document.title = `New messages ${value}`;
    // }
    value > 1 && (document.title = `New messages ${value}`);
  }, [value]);
  //   run every time it change
  return (
    <div>
      <h1>{value}</h1>
      <button
        className="btn btn-primary mx-auto"
        onClick={() => setValue(value + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default EffectBasic;
