import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


function NavigatorBar() {

    return(
        <div>
           <Navbar bg="dark" variant="dark">
               <Link to='' className="navbar-brand">Deliverasugo</Link>
                
                <Nav className="mr-auto">
                    <Link to='' className="nav-link"> <FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
                </Nav>
                <Nav className="navbar-right">
                    <Link to='register' className="nav-link" ><FontAwesomeIcon icon={faUserPlus}/> Register</Link>
                    <Link to='login' className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/> Login</Link>
                </Nav>
           </Navbar>
        </div>
    );
    
}

export default NavigatorBar;