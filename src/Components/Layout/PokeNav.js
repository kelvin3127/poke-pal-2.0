import React from 'react'
import { Navbar } from 'react-bootstrap';

 const PokeNav = () => {
        return (
            <div>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand>PokePals</Navbar.Brand>
                </Navbar>
            </div>
        )
}

export default PokeNav;