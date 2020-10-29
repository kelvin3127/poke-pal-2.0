import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';

//Get the updated value
//Take the value and bring it to state variable
//Clicking Search button to invoke function to http call to search pokeapi


function PokeSearch(props) {

    //UseState hook to attach a onchange event handler and update state variable
    //default value to a empty state
    const [ search, setSearch ] = React.useState('');


    //Button onclick to envoke a http call to props getPokemon with query of search

    return (
        <Container>
            <Form className="mt-2">
                <Form.Row className="align-items-center">
                    <Col sm={10} className="my-1">
                        <Form.Control className="PokeInput"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search your Pokemon"/>
                    </Col>
                    <Col sm={2} className="my-1">
                        <Button className="PokeButton" onClick={(e) => props.getPokemon(search)}>Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    )
}

export default PokeSearch;