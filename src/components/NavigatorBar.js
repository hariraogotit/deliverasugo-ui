import React from 'react';
import {Navbar, Nav} from "react-bootstrap";

function NavigatorBar() {

    return(
        <div>
           <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Deliverasugo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Login</Nav.Link>
                    <Nav.Link href="#">Logout</Nav.Link>
                </Nav>
           </Navbar>
        </div>
    );
    
}

export default NavigatorBar;