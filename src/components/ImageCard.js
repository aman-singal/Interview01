import React from 'react'
import {Container , Row , Image , Col} from 'react-bootstrap'

function ImageCard({ImageArray}) {
    return (
        <div>
            <Container style={{marginTop: '0px'}}>
            <Row>
            {ImageArray.length < 5 ? ImageArray.map(item =>{
                    return(
                    <Col  style={{padding: '0px'}} >
                        {}
                        <Image style={{width: '280px' , height: '210px'}} src={item} rounded />
                    </Col>
                    )
                }) :
                ImageArray.map(item =>{
                    return(
                    <Col  style={{padding: '0px'}} >
                        {}
                        <Image style={{width: '183px' , height: '137px'}} src={item} rounded />
                    </Col>
                    )
                })}
            </Row>
            </Container>
        </div>
    )
}



export default ImageCard

