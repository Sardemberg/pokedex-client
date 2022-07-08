import React from "react"
import "./index.css"

export default function Input({type, placeholder, customStyle, name, showLabel = false, textLabel}){
    return(
        <div class="InputContainer">
            {
                showLabel && (
                    <label>
                        {textLabel}
                    </label>
                )
            }
            <input 
                class="FormInput" 
                type={type} 
                placeholder={placeholder} 
                style={customStyle}
                name={name}
            />
        </div>
    )
}