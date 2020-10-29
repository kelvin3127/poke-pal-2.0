import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';



function PokeSearch(props) {
    return (
        <Container>
            <Form className="mt-2">
                <Form.Row className="align-items-center">
                    <Col sm={10} className="my-1">
                        <Form.Control
                            placeholder="Search your Pokemon"/>
                    </Col>
                    <Col sm={2} className="my-1">
                        <Button>Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    )
}

export default PokeSearch;