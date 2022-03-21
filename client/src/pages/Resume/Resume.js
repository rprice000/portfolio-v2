// This is the resume page
import React from 'react';
import { Carousel, Container, Card, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
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
                            <Row className="justify-content-between">
                                        <Col lg="5" className="text-center">
                                        <h4>Sam Houston State University</h4>
                                            <p>Degree: Bachelor of Business Administration (BBA)</p>
                                            <p>Completed: May 2010</p> 
                                        </Col>
                                        <Col lg="5" className="text-center">
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
                            <ListGroup>
                                <Row fluid>
                                <Col  lg="4" xs="12">
                                <ListGroup.Item className="text-center">Rice University Full Stack Web Developer Coding Bootcamp – February 2022</ListGroup.Item>
                                <ListGroup.Item className="text-center">Coursera Advanced Styling and Responsive Design – February 2020</ListGroup.Item>
                                <ListGroup.Item className="text-center">Coursera Interactivity with JavaScript – February 2020</ListGroup.Item>
                                <ListGroup.Item className="text-center">Coursera Intro to CSS3 – February 2020</ListGroup.Item>
                                <ListGroup.Item className="text-center">Coursera Intro to HTML5 – January 2020</ListGroup.Item>
                                </Col>
                                <Col lg="4" xs="12">
                                <ListGroup.Item className="text-center">Coursera Intro to Search Engine Optimization – June 2018</ListGroup.Item>
                                <ListGroup.Item className="text-center">Cisco CCNA Routing and Switching – March 2010</ListGroup.Item>
                                <ListGroup.Item className="text-center">N+ Certified – October 2013</ListGroup.Item>
                                <ListGroup.Item className="text-center">A+ Certified – May 2011 – Updated October 2013</ListGroup.Item>
                                </Col>
                                <Col lg="4" xs="12">
                                <ListGroup.Item className="text-center">HP Certification/ H08-Servicing HP Desktops and Notebooks - September 2005</ListGroup.Item>
                                <ListGroup.Item className="text-center">Cisco/ Introduction to Telepresence Training Certificate of Completion – February 2012 </ListGroup.Item>
                                <ListGroup.Item className="text-center">Dell Desktop Certified – May 2011</ListGroup.Item>
                                <ListGroup.Item className="text-center">Dell Laptop Certified – May 2011</ListGroup.Item>
                                <ListGroup.Item className="text-center">Dell Network Printer Certified – October 2011</ListGroup.Item>
                                </Col>
                                </Row>
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