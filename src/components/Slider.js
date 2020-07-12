import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Image} from 'react-bootstrap';
import "./slider.css";

function Slider({ImageArray}) {
  return (
    <div style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center'}}>
        <div style={{width: "1160px" , height: "411.91px"}}>
      <OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    nav

    items={1}
    dots={false}
    nav={true}
    // navText={["<img src={require('./arrowleft.JPG')} />" , "<img src= './arrowright.JPG'/>" ]}
    navClass={["owl-prevButton" , "owl-nextButton"]}
>
  {ImageArray.map(image =>{
    return(
      <div>
        <div className="item">
        <Image src={image} />
        </div>
      </div>
    )
  })}
</OwlCarousel>
    </div>
    </div>
    
  )
}

export default Slider

