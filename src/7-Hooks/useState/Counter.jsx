import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <div className="text-center">
          <button
            className="btn btn-danger ps-3 mx-3"
            onClick={() => setValue(value - 1)}
          >
            {" "}
            -{" "}
          </button>
          <button className="btn btn-warning me-3" onClick={() => setValue(0)}>
            {" "}
            Reset{" "}
          </button>
          <button
            className="btn btn-success me-3"
            onClick={() => setValue(value + 1)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
