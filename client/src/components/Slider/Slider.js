// React Imports
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
// Component and CSS Imports
import './Slider.css'


const Slider = () => {


    return (

            <Carousel fade 
            // controls={false} 
            // indicators={false} 
            id="slider">
                
                <Carousel.Item>
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center">
                            <h1>Rice University Coding BootCamp</h1>
                        </Col>
             
                        <Col>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                <h1>Item 2</h1>
                </Carousel.Item>

                <Carousel.Item>
                    <h1>Item 3</h1>
                </Carousel.Item>

            </Carousel>




    )
}


export default Slider;