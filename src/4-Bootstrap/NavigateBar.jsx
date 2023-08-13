import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const NavigateBar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">React Lessons</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/components">Component</Nav.Link>
            <Nav.Link href="/JSXRules">JSX-Rules</Nav.Link>
            <Nav.Link href="/CSSReact">CSS in React</Nav.Link>
            <Nav.Link href="/BootstrapReact">BootStrap in React</Nav.Link>
            <NavDropdown title="Props" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Props1">Case 1</NavDropdown.Item>
              <NavDropdown.Item href="/Props2">
                Case 2
              </NavDropdown.Item>
              <NavDropdown.Item href="/Props3">
                Case 3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/rules">React Router Dom</Nav.Link>
            <NavDropdown title="React Hooks" id="basic-nav-dropdown">
              <NavDropdown.Item href="/useStateHook">useState</NavDropdown.Item>
              <NavDropdown.Item href="/useEffectHook">
                useEffect
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/rules">React Forms</Nav.Link>
            <Nav.Link href="/Crud">Crud</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigateBar;
