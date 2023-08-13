import React from "react";
import { Card, Button } from "react-bootstrap";

// props, argumentat qe i kalohen funksionit
// luajne rolin e parametrave tek nje funksion normal (jo komponente)
const Place1 = (props) => {
  return (
    <div>
      <Card>
        {/* Krijimi i menyres se therritjes (Krijimi i atributeve) */}
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Place1;
