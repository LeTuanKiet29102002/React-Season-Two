import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container fluid>
                <Navbar.Brand >
                    <NavLink className='nav-link' to="/">KIMOON</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="todo">Todo</NavLink>
                        <NavLink className='nav-link' to="/users">User</NavLink>
                        <NavLink className='nav-link' to="/admins">Admin</NavLink>
                        <NavDropdown title="CountDown" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                <NavLink className='nav-link' to="/countdownclass">CowntDown Class</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='nav-link' to="/countdownhook">CowntDown Hook</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink className='nav-link' to="/particles">Particles</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="#" className='nav-link' disabled>
                            Link
                        </NavLink>
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

export default Header;