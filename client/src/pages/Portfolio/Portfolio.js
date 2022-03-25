// React Imports
import React from 'react';
// import { Container, Card, Col, Row, ListGroup, Table } from 'react-bootstrap';
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';

// Styling Imports
import '../Portfolio/Portfolio.css'

// Component Imports



const Portfolio = () => {
    return (
            <div id="portfolio-page">
                <section id="portfolio-hero">
                <h1>Portfolio</h1>
                </section>
                <Container fluid>
                {/* d-flex justify-content-center align-items-center */}
                    <Row>


                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                    <Nav className="flex-column">
                                        <Button className="mt-2 mb-2">Deployed App</Button>
                                        <Button className="mt-2 mb-2">GitHub Repo</Button>
                                        <Button className="mt-2 mb-2">Modal Info</Button>
                                    </Nav>
                                </div>

                                <div class="card-content-spacing card-cover">
                                    <h2>Project: Run-Buddy</h2>
                                </div>
                            </div>
                        </Col>





                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>2</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>3</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>4</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>5</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>6</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-around">
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>7</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>8</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>9</h3>
                            </div>
                        </Col>
                    </Row>





                </Container>
            </div>    

    )
}

export default Portfolio;