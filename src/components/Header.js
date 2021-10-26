import React from "react";
import { Navbar, Nav, Container ,Button} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Weather App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>
               <Button variant="outline-light">
               <i className="bi bi-house-door"></i> Home
               </Button>
               
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/favorites">
            
              <Nav.Link>
              <Button variant="outline-light">
              <i className="bi bi-heart"></i> Favorites
               </Button>
         
              </Nav.Link>
            </LinkContainer>
          </Nav>    
        <div style={{display:'flex',gap:10}}>
        <Button variant="outline-light"><i className="bi bi-brightness-high"></i> Change Theme</Button>
        <Button variant="outline-warning"><i className="bi bi-thermometer-half"></i> C</Button>
        </div>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
