import React from 'react'
import {Container , Row , Image , Col} from 'react-bootstrap'

function BigImageCard({ImageArray, MainImage}) {
    return (
        <div>
            <Container>
            <Row> 
            <Col xs={6}  style={{paddingLeft: '0px'}}>
                 <Image style={{width: '573px', height: '386px',  }} src={MainImage} rounded />
            </Col>
            <Col  xs={6}>
            <Row>
            <Col xs={6}>
            <Image style={{width: '280px' , height: '187px' , marginBottom: "6px" }} src={ImageArray[0]} rounded />
            </Col>
            <Col xs={6}>
            <Image style={{width: '280px' , height: '187px' , marginBottom: "6px" }} src={ImageArray[1]} rounded />
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
            <Image style={{width: '280px' , height: '187px' , marginTop: "6px" }} src={ImageArray[2]} rounded />
            </Col>
            <Col xs={6}>
            <Image style={{width: '280px' , height: '187px' , marginTop: "6px" }} src={ImageArray[3]} rounded />
            </Col>
            </Row>
            </Col>
            </Row>
            </Container>
        </div>
    )
}



export default BigImageCard

