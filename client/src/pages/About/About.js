// This is the home page
import React from 'react';

// Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Component and CSS Imports
import '../About/About.css'
import ParticleBackground from '../../components/Background/ParticleBackground';



const About = () => {
    return (
        <div id="about-page">
            
           <ParticleBackground />

           <Container fluid className="mt-5">

            <Row>
            <Col lg="1">
                    {/* Spacing Column */}
            </Col>
            <Col>
                <h1>A little about me . . .</h1>
            </Col>
            </Row>

{/* Test Row */}
            {/* <Row className="mt-5">
            <Col lg="4">
                   
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="text-end mb-5">test</h2>
                    <p className="mb-5">
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col lg="2">
                    
                </Col>
            </Row> */}

{/* Tech Nerd */}
            <Row className="mt-5">
            <Col lg="4">
                    {/* Spacing Column */}
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="text-end mb-5">Tech Nerd</h2>
                    <p className="mb-5">
                        I love the quote from Aurthur C. Clarke, “Any sufficiently advanced technology is 
                        indistinguishable from magic.”  This has always been true for me.  Growing up I have
                        always been drawn to the latest gizmo or gadegt.  I once took apart my Nintendo 64 controller
                        just to see what was inside.  In doing so I lost the use of my Nintendo
                        but I gained the understanding of how the controller worked. 
                    </p>
                </Col>
                <Col lg="2">
                    {/* Spacing Column */}
                </Col>
            </Row>
            
{/* Gaming */}
            <Row className="mt-5">
            <Col lg="4">
                    {/* Spacing Column */}
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="text-end mb-5">Gamer</h2>
                    <p className="mb-5">
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col lg="2">
                    {/* Spacing Column */}
                </Col>
            </Row>

{/* Drawing and Comic Books */}
            <Row className="mt-5">
            <Col lg="4">
                    {/* Spacing Column */}
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="text-end mb-5">Artist and Writer</h2>
                    <p className="mb-5">
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col lg="2">
                    {/* Spacing Column */}
                </Col>
            </Row>

{/* Movies and Shows */}
            <Row className="mt-5">
            <Col lg="4">
                    {/* Spacing Column */}
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="text-end mb-5">Movie Buff</h2>
                    <p className="mb-5">
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col lg="2">
                    {/* Spacing Column */}
                </Col>
            </Row>

{/* Health and Fitness */}
            <Row className="mt-5">
            <Col lg="4">
                    {/* Spacing Column */}
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="text-end mb-5">Amatuer Professional Athlete</h2>
                    <p className="mb-5">
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col lg="2">
                    {/* Spacing Column */}
                </Col>
            </Row>

            {/* <p>
                I am a Web Developer able to build web applications from the ground 
                up -- from concept, navigation, layout, styling and programming. 
                Skilled at writing well-designed, testable and efficient code using 
                current best practices in web development. Fast learner, hard worker 
                and team player who is proficient in an array of web development tools.
            </p> */}

           
           </Container>


           {/* <div>
                <img src="images/image-headshot.jpg" alt="..." id="headshot" />
            </div> */}


           
        </div>
    )
}

export default About;