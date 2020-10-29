import React from 'react'
import { Container, Card, Table, Row, Col, ProgressBar } from "react-bootstrap";

const PokeCard = (props) => {
        return (
            <div>
            <Container className={"mt-2"}>
                <Card>     
                    <Card.Body>
                    <Row>
                        <Col>
                            <h3>{props.name}</h3>
                            <Card.Text>
                                <h5>Type</h5>
                                {props.types.map((type, key) => (
                                    <div key={key}>
                                        <span>{type.type.name}</span>
                                    </div>
                                ))}
                                <h5>Abilities</h5>
                                {props.abilities.map((ability, key) => (
                                    <div key={key}>
                                        <span>{ability.ability.name}</span>
                                    </div>
                                ))}          
                            </Card.Text>
                        </Col>
                            <img src={props.sprite} alt={props.name} />
                        <Col>
                        </Col>
                    </Row>
                    </Card.Body>
                    <Card.Body>
                        <Table>
                            <tr>
                                <td>Move 1</td>
                                <td>Move 2</td>
                            </tr>
                            <tr>
                                <td>Move 3</td>
                                <td>Move 4</td>
                            </tr>
                        </Table>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text>
                            <h4>Base Stats</h4>
                            {props.stats.map((stat, key) => (
                                <div key={key}>
                                    <strong>{stat.stat.name}</strong>
                                    <ProgressBar now={stat.base_stat} max={255} label={stat.base_stat}/>
                                </div>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
        )
}
export default PokeCard;