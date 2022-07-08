import React from "react"
import "./index.css"
import Input from "../../components/Form/Input"
import Button from "../../components/Button"
import PixelTitle from "../../components/PixelTitle"

export default function FormLogin(){
    return(
        <div className="FormLogin">
            <div className="ContainerTitle">
                <PixelTitle>
                    POKEDEX
                </PixelTitle>
            </div>
            <div className="Form">
                <Input 
                    name='email' 
                    placeholder='Email' 
                    type="email"
                    showLabel 
                    textLabel="Informe seu email:"
                />

                <Input 
                    name='senha' 
                    type="password"
                    placeholder='Senha' 
                    showLabel 
                    textLabel="Informe sua senha:"
                />

                <Button variant='primary'>
                    Login
                </Button>
                
                <Button variant='outline-primary'>
                    Registre-se
                </Button>
            </div>
        </div>
    )
}