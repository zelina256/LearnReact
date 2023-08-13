import React from "react";
import { Card, Button } from "react-bootstrap";


// Destructuring; perdorimi ne menyre te vecante e seciles karakteristike 
// Te vendosura ne formen e argumentave (ne vend te props)
const Place = ({ image, title, text }) => {
  return (
    <div>
      <Card>
        {/* Nuk eshte e nevojshme te perdoret fjala kyqe props */}
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
