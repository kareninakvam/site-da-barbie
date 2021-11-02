import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


export default function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="./img/logo.png" alt="Logo da Barbie" className="logosite" />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/movies">Filmes</Nav.Link>
                        <Nav.Link href="/contact">Contato</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}