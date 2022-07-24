import React from "react"
import "./index.css"

export default function Input(props){
    return(
        <div className="InputContainer">
            {
                props.showLabel && (
                    <label>
                        {props.textLabel}
                    </label>
                )
            }
            <input 
                className="FormInput" 
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                style={props.style}
                {...props.register}
            />
        </div>
    )
}