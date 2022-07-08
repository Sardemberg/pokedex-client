import React from 'react'
import "./index.css"

export default function Button({variant, onClick, children}){
    return(
        <button className="Button" variant={variant} onClick={onClick}>
            {children}
        </button>
    )
}