import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Saber Wizard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="\">Home</Nav.Link>
            <Nav.Link href="\squaretest">Square Test</Nav.Link>
            <NavDropdown title="Language" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">PT-BR</NavDropdown.Item>
              <NavDropdown.Item href="#action4">English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Spanish</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              In construction
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
