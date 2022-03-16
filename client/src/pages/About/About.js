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

           <Container fluid>

            <Row>
                <h1>A little about me</h1>
            </Row>

            {/* Tech Nerd */}
            <Row>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="text-end">Tech Nerd</h2>
                    <p className="text-end">
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col xs lg="2" className="column">
                    2
                </Col>
            </Row>
            
            {/* Video Games */}
            <Row>
                <Col className="column block-example border-bottom border-dark">
                    <h2>Gaming</h2>
                    <p>
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col xs lg="2" className="column">
                        2
                </Col>
            </Row>

            {/* Drawing and Comic Books */}
            <Row>
                <Col className="block-example border-bottom border-dark">
                    <h2>Drawing and Comic Books</h2>
                    <p>
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col xs lg="2" className="column">
                    2
                </Col>
            </Row>

            {/* Movies */}
            <Row>
                <Col className="block-example border-bottom border-dark">
                    <h2>Movies and TV Shows</h2>
                    <p>
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col xs lg="2" className="column">
                    2
                </Col>
            </Row>

            {/* Health and Fitness */}
            <Row>
                <Col className="block-example border-bottom border-dark">
                    <h2>Health and Fitness</h2>
                    <p>
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col xs lg="2" className="column">
                    2
                </Col>
            </Row>

            {/* <p>
                I am a Web Developer able to build web applications from the ground 
                up -- from concept, navigation, layout, styling and programming. 
                Skilled at writing well-designed, testable and efficient code using 
                current best practices in web development. Fast learner, hard worker 
                and team player who is proficient in an array of web development tools.
            </p> */}

            <div>
                <img src="images/image-headshot.jpg" alt="..." id="headshot" />
            </div>
           </Container>


           


           
        </div>
    )
}

export default About;