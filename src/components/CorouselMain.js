import React from 'react'
import {Carousel } from 'react-bootstrap'

function CorouselMain() {
    
    return (
        <Carousel controls={true}  indicators={false} touch={true}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.bigbasket.com/media/uploads/banner_images/2007004_apples-banana_460.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.bigbasket.com/media/uploads/banner_images/2007098_bb-star-yogabar_460.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.bigbasket.com/media/uploads/banner_images/2007015_breakfast-store_460.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    )
}

export default CorouselMain
