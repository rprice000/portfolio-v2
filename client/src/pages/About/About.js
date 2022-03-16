// This is the home page
import React from 'react';

// Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// Component and CSS Imports
import '../About/About.css'
import ParticleBackground from '../../components/Background/ParticleBackground';



const About = () => {
    return (
        <div>
            
           <ParticleBackground />
           <Container>

            


            <Card style={{ width: '30%', height: '300px' }}>
                <Card.Img variant="top" src="images/image-headshot.jpg" />
            </Card>

            <div className="card">
                <img src="images/image-headshot.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>


           </Container>
        </div>
    )
}

export default About;