import React from 'react';
import {Navbar, Container, Col} from "react-bootstrap";

function Footer() {

    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col  lg={12} className="text-center text-muted">
                    <div> All rights reserved by Deliverasugo</div>
                </Col>
            </Container>
        </Navbar>
    );
    
    
}

export default Footer;