import {Fragment, useContext} from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import UserContext from '../UserContext'


export default function AppNavBar(){
	const{user}=useContext(UserContext)
	return(
		<Navbar bg="info" expand="lg">
		  <Container>
		    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
		        <Nav.Link href="/">Home</Nav.Link>
		        <Nav.Link href="/courses">Courses</Nav.Link>
		       { 
		       	 user.email != null
		       	?
		       		<Nav.Link href="/logout">logout</Nav.Link>
		       	:

		       	<Fragment>
		        	<Nav.Link href="/login">Login</Nav.Link>
		        	<Nav.Link href="/register">Register</Nav.Link>
		        </Fragment>
		       }

		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		</Navbar>
	)
}

