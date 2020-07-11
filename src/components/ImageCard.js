import React from 'react'
import {Container , Row , Image , Col} from 'react-bootstrap'

function ImageCard({ImageArray}) {
    return (
        <div>
            <Container>
            <Row>
                {ImageArray.map(item =>{
                    return(
                    <Col xs={3} style={{padding: '0px'}} >
                        <Image style={{width: '280px' , height: '210px'}} src={item} rounded />
                    </Col>
                    )
                })}
            </Row>
            </Container>
        </div>
    )
}



export default ImageCard

