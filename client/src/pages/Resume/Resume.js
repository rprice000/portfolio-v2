// This is the resume page
import React from 'react';
import { Carousel, Container, Card, Col, Row, ListGroup } from 'react-bootstrap';
import '../Resume/Resume.css'

const Resume = () => {
    return (
        <div id="resume-page">
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img className="d-block w-100" src="images/image-one.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img className="d-block w-100" src="images/image-two.jpg" alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img className="d-block w-100" src="images/image-three.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container fluid>

{/* Education Card */}
            <Row>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Education</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Text>                               
                            <Container>                           
                            <Row className="justify-content-md-center">
                                        <Col lg="6" className="text-center">
                                        <h4>Sam Houston State University</h4>
                                            <p>Degree: Bachelor of Business Administration (BBA)</p>
                                            <p>Completed: May 2010</p> 
                                        </Col>
                                        <Col lg="6" className="text-center">
                                        <h4>University of Houston-Victoria</h4>
                                            <p>Masters in Entrepreneurship and Economic Development (MBA)</p>
                                            <p>Completed: December 2021</p> 
                                        </Col>
                            </Row>
                            </Container>                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                </Row>

{/* Credentials Card */}
                <Row>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Credentials</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Text>
                                <ListGroup horizontal className="justify-content-around">

                                <ListGroup.Item id="test">
                                    <Card>
                                        <Card.Body className="text-center">
                                        <Card.Title>Full Stack Web Developer Coding Bootcamp</Card.Title>
                                            <Card.Text>Rice University</Card.Text>
                                            <Card.Text>Completed: February 2022</Card.Text> 
                                        </Card.Body>
                                    </Card>
                                </ListGroup.Item>

                                <ListGroup.Item id="test">
                                    <Card>
                                        <Card.Body className="text-center">
                                        <Card.Title>Advanced Styling and Responsive Design</Card.Title>
                                            <Card.Text>Coursera</Card.Text>
                                            <Card.Text>February 2020</Card.Text> 
                                        </Card.Body>
                                    </Card>
                                </ListGroup.Item>

                                <ListGroup.Item id="test">
                                    <Card>
                                        <Card.Body className="text-center">
                                        <Card.Title>Advanced Styling and Responsive Design</Card.Title>
                                            <Card.Text>Coursera</Card.Text>
                                            <Card.Text>February 2020</Card.Text> 
                                        </Card.Body>
                                    </Card>
                                </ListGroup.Item>

                                <ListGroup.Item id="test">
                                    <Card>
                                        <Card.Body className="text-center">
                                        <Card.Title>Advanced Styling and Responsive Design</Card.Title>
                                            <Card.Text>Coursera</Card.Text>
                                            <Card.Text>February 2020</Card.Text> 
                                        </Card.Body>
                                    </Card>
                                </ListGroup.Item>



















                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                </Row>




{/* Technologies Card */}
                <Row>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Technologies</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            {/* <Card.Title>Technologies</Card.Title> */}
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                </Row>

{/*Skills Card */}
                <Row>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Skills</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            {/* <Card.Title>Technologies & Skills</Card.Title> */}
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                </Row>

{/* Professional Experience Section */}
                <Row>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Professional Experience</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            {/* <Card.Title>Professional Experience</Card.Title> */}
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                </Row>


            </Container>


            
        </div>
    )
}

export default Resume;