import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

// import Header from '../Header/Header'

const Navigation = () => {
    return (
    
        <div>

            <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark'>
                <Container>
                    <Nav.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     
    )
}

export default Navigation