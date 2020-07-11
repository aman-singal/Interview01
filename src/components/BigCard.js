import React from 'react'
import CardHeader from './CardHeader'
import BigImageCard from './BigImageCard'

function BigCard({headerText , ImageArray , MainImage}) {
    return (
        <div>
            <div style={{justifyContent: 'center' , alignItems: 'center', marginTop: '80px' , display: 'flex'}}>
            <div style={{width: '1160px' , margin: '0px' }}>
                <CardHeader headerText={headerText} />
                <BigImageCard ImageArray={ImageArray} MainImage={MainImage}/>
            </div>
        </div>
        </div>
    )
}

export default BigCard
