import React from 'react'

function CardHeader({headerText}) {
    return (
        <div style={{ textAlign: 'center' , fontSize: '24px'  }}>
               {headerText}
               <hr />
        </div>
    )
}

export default CardHeader
