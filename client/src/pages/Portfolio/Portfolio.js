// React Imports
import React from 'react';
// import { Container, Card, Col, Row, ListGroup, Table } from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
                            <Card className="cards">
                                <h3>1</h3>
                            </Card>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <Card className="cards">
                                <h3>2</h3>
                            </Card>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <Card className="cards">
                                <h3>3</h3>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="card-column d-flex justify-content-center">
                            <Card className="cards">
                                <h3>4</h3>
                            </Card>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <Card className="cards">
                                <h3>5</h3>
                            </Card>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <Card className="cards">
                                <h3>6</h3>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="justify-content-around">
                        <Col className="card-column d-flex justify-content-center">
                            <Card className="cards">
                                <h3>7</h3>
                            </Card>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <Card className="cards">
                                <h3>8</h3>
                            </Card>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <Card className="cards">
                                <h3>9</h3>
                            </Card>
                        </Col>
                    </Row>





                </Container>
            </div>    

    )
}

export default Portfolio;