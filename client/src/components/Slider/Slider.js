// React Imports
import React from 'react';
import { Carousel } from 'react-bootstrap';
// Component and CSS Imports
import './Slider.css'


const Slider = () => {


    return (
            <Carousel id="slider">
                <Carousel.Item>
                    <img
                    id="slide-1"
                    className="d-block w-100"
                    src="../../images/image-one.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    id="slide-2"
                    className="d-block w-100"
                    src="../../images/image-one.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    id="slide-3"
                    className="d-block w-100"
                    src="../../images/image-one.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}


export default Slider;