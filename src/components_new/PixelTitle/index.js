import React from "react"
import './index.css'

export default function PixelTitle({children}){
    return(
        <h1 className='PixelTitle'>
            {children}
        </h1>
    )
}