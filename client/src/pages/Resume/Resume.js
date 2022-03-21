// This is the resume page
import React from 'react';
import { Carousel, Container, Card, Col, Row, ListGroup } from 'react-bootstrap';
import '../Resume/Resume.css'

import Table from 'react-bootstrap/Table'




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
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Issuing Organization</th>
                                            <th>Certificate</th>
                                            <th>Completed</th>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr>
                                            <td>Rice University</td>
                                            <td>Full Stack Web Developer Coding Bootcamp</td>
                                            <td>February 2022</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Advanced Styling and Responsive Design</td>
                                            <td>February 2020</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Interactivity with JavaScript</td>
                                            <td>February 2020</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Intro to CSS3</td>
                                            <td>February 2020</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Intro to HTML5</td>
                                            <td>January 2020</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Intro to Search Engine Optimization</td>
                                            <td>June 2018</td>
                                        </tr>

                                        <tr>
                                            <td>Cisco Systems</td>
                                            <td>CCNA Routing and Switching</td>
                                            <td>March 2010</td>
                                        </tr>

                                        <tr>
                                            <td>CompTIA</td>
                                            <td>N+ Certified </td>
                                            <td>October 2013</td>
                                        </tr>

                                        <tr>
                                            <td>CompTIA</td>
                                            <td>A+ Certified</td>
                                            <td>May 2011</td>
                                        </tr>

                                        <tr>
                                            <td>Cisco Systems</td>
                                            <td>Introduction to Telepresence Training Certificate of Completion</td>
                                            <td>February 2012</td>
                                        </tr>

                                        <tr>
                                            <td>Dell</td>
                                            <td>Desktop Certified </td>
                                            <td>May 2011</td>
                                        </tr>

                                        <tr>
                                            <td>Dell</td>
                                            <td>Laptop Certified</td>
                                            <td>May 2011</td>
                                        </tr>

                                        <tr>
                                            <td>Dell</td>
                                            <td>Network Printer Certified</td>
                                            <td>October 2011</td>
                                        </tr>

                                        <tr>
                                            <td>HP/Hewlett-Packard</td>
                                            <td>H08-Servicing HP Desktops, Workstations, and Notebooks</td>
                                            <td>September 2010</td>
                                        </tr>
                                       
                                    </tbody>
                                </Table>
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
                            <ListGroup>
                                <Row fluid>
                                    <Col  lg="4" xs="12">
                                        <ListGroup.Item className="text-center">Visual Studio</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Git</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Mongo Atlas</ListGroup.Item>
                                        <ListGroup.Item className="text-center">MySQL Workbench</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Insomnia API Client</ListGroup.Item>
                                        <ListGroup.Item className="text-center">HTML5</ListGroup.Item>
                                        <ListGroup.Item className="text-center">CSS3</ListGroup.Item>
                                        <ListGroup.Item className="text-center">BootStrap</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Bulma</ListGroup.Item>
                                    </Col>
                                    <Col lg="4" xs="12">
                                        <ListGroup.Item className="text-center">Semantic UI</ListGroup.Item>
                                        <ListGroup.Item className="text-center">JavaScript</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Node.js</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Express.js</ListGroup.Item>
                                        <ListGroup.Item className="text-center">SQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center">NoSQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center">React.js</ListGroup.Item>
                                    </Col>
                                    <Col lg="4" xs="12">
                                        <ListGroup.Item className="text-center">GraphQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center">MongoDB</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Apollo Server</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Stripe Payment</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Redux</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Object Oriented Programming (OOP)</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Object Relational Mapping (ORM)</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Model View Controller (MVC)</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Progressive Web Application (PWA) </ListGroup.Item>
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