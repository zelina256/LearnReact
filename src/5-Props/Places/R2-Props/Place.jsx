import React from "react";
import { Card, Button } from "react-bootstrap";

const Place = (props) => {
  // Destructuring; perdorimi ne menyre te vecante e seciles karakteristike 
  // perdoren kllapat {}
  const { image, title, text } = props.places
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};



export default Place;
