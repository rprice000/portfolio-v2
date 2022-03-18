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
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            {/* <Card.Title>Education</Card.Title> */}
                            <Card.Text>
                                
                                <ul>
                                
                                    <li>Sam Houston State University</li>
                                        <ul>
                                            <li>Degree: Bachelor of Business Administration (BBA)</li>
                                            <li>Completed: May 2010</li>
                                        </ul>

                                    <li>University of Houston-Victoria</li>
                                        <ul>
                                            <li>Degree: Masters in Entrepreneurship and Economic Development (MBA)</li>
                                            <li>Completed: December 2021</li>
                                        </ul>
                                
                                </ul>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                </Row>

{/* Education Card */}
<Row>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Education</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            {/* <Card.Title>Education</Card.Title> */}
                            <Card.Text>
                                
                                
                                <div className="justify-content-between">
                                   
                                    <div>Sam Houston State University</div>
                                        <div>
                                            <div>Degree: Bachelor of Business Administration (BBA)</div>
                                            <div>Completed: May 2010</div>
                                        </div>
                                  
                                    <div>University of Houston-Victoria</div>
                                        <div>
                                            <div>Degree: Masters in Entrepreneurship and Economic Development (MBA)</div>
                                            <div>Completed: December 2021</div>
                                        </div>
                                   
                                </div>
                              

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                </Row>

{/* Education Card */}
<Row>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Education</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            {/* <Card.Title>Education</Card.Title> */}
                            <Card.Text>
                                
                                
                            <ListGroup horizontal className="justify-content-around">
                                <ListGroup.Item>Sam Houston State University</ListGroup.Item>
                                <ListGroup.Item>University of Houston-Victoria</ListGroup.Item>
                            </ListGroup>
                                                            

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
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            {/* <Card.Title>Credentials</Card.Title> */}
                            <Card.Text>
                          

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