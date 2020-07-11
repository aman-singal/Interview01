import React from 'react'

function BigCard({headerText , ImageArray}) {
    return (
        <div>
            <div style={{justifyContent: 'center' , alignItems: 'center', marginTop: '80px' , display: 'flex'}}>
            <div style={{width: '1160px' , margin: '0px' }}>
                <CardHeader headerText={headerText} />
                <BigImageCard ImageArray={ImageArray}/>
            </div>
        </div>
        </div>
    )
}

export default BigCard
