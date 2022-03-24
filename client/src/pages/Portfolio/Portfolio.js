// React Imports
import React from 'react';
// import { Container, Card, Col, Row, ListGroup, Table } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';

// Styling Imports
import '../Portfolio/Portfolio.css'
// import '../Portfolio/Portfolio.scss'
// Component Imports



const Portfolio = () => {
    return (
                    <div class="portfolio-body" >
                        <Container>
                            <Row>
                            <div class="card">
                            <div class="face face1">
                                <div class="content">
                                <h2 class="java">Java</h2>
                                <p class="java">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
                                </div>
                            </div>
                            <div class="face face2">
                                <h2>01</h2>
                            </div>
                            </div>

                            <div class="card">
                            <div class="face face1">
                                <div class="content">
                                <h2 class="python">Python</h2>
                                <p class="python">Python is an interpreted, high-level and general-purpose programming language.</p>
                                </div>
                            </div>
                            <div class="face face2">
                                <h2>02</h2>
                            </div>
                            </div>

                            <div class="card">
                            <div class="face face1">
                                <div class="content">
                                <h2 class="cSharp">C#</h2>
                                <p class="cSharp">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
                                </div>
                            </div>
                            <div class="face face2">
                                <h2>03</h2>
                            </div>
                            </div>
                            </Row>

                            


                        </Container>

                    </div>


    )
}

export default Portfolio;