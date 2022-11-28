import React from "react"
import './index.css'

export default function PixelTitle({children, color = null, font_size = null, font_weight = null}){
    return(
        <h1 className='PixelTitle' style={{color: color, fontSize: font_size, fontWeight: font_weight}}>
            {children}
        </h1>
    )
}