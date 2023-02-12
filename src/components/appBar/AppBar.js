import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assests/logo.png.jpg'
function AppBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="#"><img src = '' alt =''/><img className='Nav' src={Logo} alt = ''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-centre"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  as={Link} to={"home"}>Home</Nav.Link>
            <Nav.Link   as={Link} to={"account"}>Account</Nav.Link>
            <Nav.Link  as={Link} to={"cart"}>Cart</Nav.Link>
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;

