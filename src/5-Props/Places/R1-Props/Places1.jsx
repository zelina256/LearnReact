import React from "react";
import Place from "./Place";
import { Container, Row, Col } from "react-bootstrap";
import { places } from "../data/dataPlaces";
const Places1 = () => {
  return (
    <div>
      <Container>
        <Row>
          {/* Rasti 1 */}
          {/* Perdoret .map() per te krijuar nje array te ri, per shfaqjen e info ne formen e kolonave*/}
          {/* places emri i variablit ky jane te ruajtur te dhenat nga file data */}
          {/* place nje variabel cfaredo */}
          {/* index duhet te perdoret si fjale kyce per indekset, ne ato raste kur nuk kane id te deklaruar */}
          {/* ne rast se te dhenat permbajne id ose elemente unike qe mund te bejne rolin e index,
          atehere duhet te perdoret ajo parameter per key*/}
          {places.map((place, index) => {
            return (
              // key atribut ndihmon react te kuptoje se cili element eshte shtuar, ndryshuar apo hequr
              <Col key={index} xs={12} md={6} lg={4}>
                <Place
                  // Therritja duke perdorur atributet
                  // title brenda kllapave {} eshte key e perdorur tek file data (aty ku jane ruajtur info)
                  title={place.title}
                  text={place.text}
                  image={place.image}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Places1;
