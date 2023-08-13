import React from "react";
import Place from "./Place";
import { Container, Row, Col } from "react-bootstrap";
import { places } from "../data/dataPlaces";
const Places3 = () => {
  return (
    <div>
      <Container>
        <Row>
          {/* Rasti 3 */}
          {places.map((place, index) => {
            return (
              <Col key={index} xs={12} md={6} lg={4}>
                {/* Perdorimi i spread syntax per te therritur elementet (kopjuar elementet) */}
                <Place {...place} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Places3;
