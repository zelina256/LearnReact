import React from "react";
import "./flower.css";

function Flower({ img, desc, title }) {
  return (
    <section className="flower">
      <img src={img} alt="img" />
      <div>
        <p>{desc}</p>
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default Flower;
