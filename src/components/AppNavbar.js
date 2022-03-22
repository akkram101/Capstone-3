
import {Navbar, Container, Nav} from 'react-bootstrap'

export default function AppNavBar(){
	return(
		<Navbar bg="info" expand="lg">
		  <Container>
		    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
		        <Nav.Link href="#home">Home</Nav.Link>
		        <Nav.Link href="#link">Courses</Nav.Link>
		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		</Navbar>
	)
}

