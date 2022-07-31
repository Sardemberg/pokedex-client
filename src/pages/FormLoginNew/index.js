import React, {useEffect} from "react"
import "./index.css"
import Input from "../../components_new/Form/Input"
import Button from "../../components_new/Button"
import PixelTitle from "../../components_new/PixelTitle"

export default function FormLoginNew(){
    useEffect(() => {
        document.title = "Pokédex | Login"
    }, [])

    return(
        <div className="FormLoginNew">
            <div className="ContainerTitle">
                <h1>
                    Entrar
                </h1>
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

            </div>
            
            <p>Esqueceu a senha?</p>

        </div>
    )
}