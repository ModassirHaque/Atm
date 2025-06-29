import React from 'react'

const BlurCircle = ({top='auto',left="auto",right="auto",bottom="auto"}) => {
  return (
    <div className='absolute -z-50 h-58 w-58 aspect-square rounded-full   blur-2xl'
    style={{top:top ,left:left,right:right,bottom:bottom, 
        backgroundColor:'#f845663f',
    }}>
    </div>
  )
}

export default BlurCircle