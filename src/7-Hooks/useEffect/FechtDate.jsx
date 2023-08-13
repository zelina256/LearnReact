import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
const url = "https://api.github.com/users";
const FechtDate = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  });
  return (
    <div>
      <h3>Git ub users</h3>
      <Row>
        {users.map((user, index) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <Col sm={4} key={index} className="mb-5">
              <Card>
                <Row>
                  <Col md={4}>
                    <Card.Img src={avatar_url} alt={id} />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{login}</Card.Title>
                      <Card.Text>
                        <a href={html_url}>Profile</a>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default FechtDate;
