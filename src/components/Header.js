import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Importing files depending on theme
    if (theme === "light") import(`../App.css`);
    else if (theme === "dark") import(`../darkMode.css`);
  }, [theme]);

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={theme === "dark" ? "dark" : "light"}
      variant={theme === "dark" ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <Button
                  variant={theme === "dark" ? "outline-light" : "outline-dark"}
                >
                  <i className="bi bi-house-door"></i> Home
                </Button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/favorites">
              <Nav.Link>
                <Button
                  variant={theme === "dark" ? "outline-light" : "outline-dark"}
                >
                  <i className="bi bi-heart"></i> Favorites
                </Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Col className="d-flex gap-2" lg={2}>
            <Button
              variant={theme === "dark" ? "outline-light" : "outline-dark"}
              onClick={handleTheme}
            >
              <i class="bi bi-moon-fill" />
            </Button>
            <Button
              variant={theme === "dark" ? "outline-light" : "outline-dark"}
            >
              <i className="bi bi-thermometer-half"></i>
            </Button>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
