// React Imports
import React from 'react';
// import { Container, Card, Col, Row, ListGroup, Table } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';

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
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>1</h3>
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