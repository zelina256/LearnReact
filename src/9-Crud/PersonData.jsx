import React, { useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

const getLocalStorage = () => {
  let people = localStorage.getItem("people");
  if (people) {
    return JSON.parse(people);
  } else {
    return [];
  }
};
const PersonData = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(getLocalStorage);
  const [active, setActive] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname && email) {
      const person = {
        id: Math.floor(Math.random() * 100),
        fname: fname,
        email: email,
      };
      setPeople([...people, person]);
    } else {
      console.log("there are no person");
    }
    setEmail("");
    setFname("");
    setActive(false);
  };

  const deletePerson = (id) => {
    const newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };
  const updatePerson = (id) => {
    const newperson = people.find((p) => p.id === id);
    setFname(newperson.fname);
    setEmail(newperson.email);
    setActive(true);
    deletePerson(id);
  };

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return (
    <Container className="mt-5 pt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button
          variant={active === false ? "primary" : "warning"}
          type="submit"
        >
          {active === false ? "Submit" : "Update"}
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, index) => {
            return (
              <tr key={index}>
                <td>{p.id}</td>
                <td>{p.fname}</td>
                <td>{p.email}</td>
                <td>
                  <Button onClick={() => updatePerson(p.id)} variant="warning">
                    Update
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => deletePerson(p.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PersonData;
