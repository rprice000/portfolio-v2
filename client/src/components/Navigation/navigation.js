import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Navigation/Navigation.css'
import { Nav, Navbar } from 'react-bootstrap';

import Header from '../Header/Header';


const Navigation = () => {
    return (
    
       <div>
           <Navbar bg="dark" variant="dark" id="navContainer" expand="lg">

               <Navbar.Brand><Header /></Navbar.Brand>

               <Navbar.Toggle />
               <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="resume">Resume</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
               </Navbar.Collapse>

           </Navbar>
       </div>
     
    )
}

export default Navigation;