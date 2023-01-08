import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand style={{ fontFamily: 'Montserrat, Black 900',fontWeight: 'bold' }} href="#">WatchNext</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Product</Nav.Link>
                <NavDropdown title="Pricing" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Something else here
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                   Contact
                </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets" style={{ color: '#96BB7C' }} >Login</Nav.Link>
                    <Button href="#" style={{ backgroundColor: '#96BB7C', borderColor:'#96BB7C' }}>JOIN US</Button>
                 </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;