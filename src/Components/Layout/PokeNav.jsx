import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default class PokeNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>PokePals</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.link>Home</Nav.link>
                    <Nav.link>Pokedex</Nav.link>
                    <Nav.link>Random</Nav.link>
                </Nav>
            </Navbar>
        )
    }
}
