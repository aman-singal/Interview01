import React from 'react'
import ImageCard from './ImageCard'
import CardHeader from './CardHeader'
function Card({headerText , ImageArray}) {
    return (
        <div style={{justifyContent: 'center' , alignItems: 'center', marginTop: '80px' , display: 'flex'}}>
            <div style={{width: '1160px' , margin: '0px' }}>
                <CardHeader headerText={headerText} />
                <ImageCard ImageArray={ImageArray}/>
            </div>
        </div>

        
    )
}

export default Card

