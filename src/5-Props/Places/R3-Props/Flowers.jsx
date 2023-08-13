import React from "react";
import Flower from "./Flower";
import { flowers } from "../data/dataFlower";
import { Container } from "react-bootstrap";

const Flowers = () => {
  return (
    <Container style={{ display: "flex", flexWrap: "wrap" }}>
      {flowers.map((flower, index) => {
        return <Flower key={index} {...flower} />;
      })}
    </Container>
  );
};

export default Flowers;
