"use client"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from "./header.module.scss"
import Image from 'next/image';
function Header() {
    return (
        <header className={style.header}>
            <div className={style.header_top}>
                <div className="container">
                    
                </div> 
            </div>
            <Navbar expand="lg" >
                <Container >
                    <Navbar.Brand href="#">
                        <div className={`ratio ${style.logo}`}>
                            <Image src="/images/logo.svg" fill alt="shape" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <NavDropdown title="Missions" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Causes" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">News</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                        </Nav>
                        <Button variant="outline-primary">Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
}

export default Header;