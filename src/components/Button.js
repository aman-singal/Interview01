import React from 'react'
import {Button} from 'react-bootstrap'

function ButtonReact({type , text}) {
    return (
        <div>
            <Button style={{marginLeft: '10px' , width: '180px' , height: '56.83px'}} variant={type} >{text}</Button>
        </div>
    )
}

export default ButtonReact
