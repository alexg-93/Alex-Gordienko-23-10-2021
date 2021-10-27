import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useSelector,useDispatch} from 'react-redux'
import {preference} from '../redux/actions/preferenceActions'

const Header = () => {

  const dispatch = useDispatch()
  const preferences = useSelector(state=>state.preferenceReducer)

  const {isMetric,theme} = preferences

  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [Metric,setMetric] = useState(isMetric)

  useEffect(() => {
    // Importing files depending on theme
    if (selectedTheme === "light") import(`../App.css`);
    else if (selectedTheme === "dark") import(`../darkMode.css`);

    dispatch(preference(Metric,selectedTheme))
   
  }, [dispatch,Metric,selectedTheme]);

  const handleTheme = () => {
    selectedTheme === "light" ? setSelectedTheme("dark") : setSelectedTheme("light");
  };

  const handleMetric = () => {
    Metric === true ? setMetric(false) : setMetric(true)
   
  }


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={selectedTheme === "dark" ? "dark" : "light"}
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
                  variant={selectedTheme === "dark" ? "outline-light" : "outline-dark"}
                >
                  <i className="bi bi-house-door"></i> Home
                </Button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/favorites">
              <Nav.Link>
                <Button
                  variant={selectedTheme === "dark" ? "outline-light" : "outline-dark"}
                >
                  <i className="bi bi-heart"></i> Favorites
                </Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Col className="d-flex gap-2" lg={2}>
            <Button
              variant={selectedTheme === "dark" ? "outline-light" : "outline-dark"}
              onClick={()=>handleTheme()}
            >
              <i class="bi bi-moon-fill" />
            </Button>
            <Button
              variant={selectedTheme === "dark" ? "outline-light" : "outline-dark"}
              onClick={()=>handleMetric()}
            >
            °{Metric ? 'C' : 'F'}
            </Button>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
