// This is the resume page
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Resume/Resume.css'

const Resume = () => {
    return (
        <div>
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

            <h1>Resume</h1>
        </div>
    )
}

export default Resume;