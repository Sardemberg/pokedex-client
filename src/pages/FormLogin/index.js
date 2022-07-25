import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import auth from "../../services/auth"
import "./index.css"
import Input from "../../components/Form/Input"
import Button from "../../components/Button"
import PixelTitle from "../../components/PixelTitle"
import { AuthContext } from "../../contexts/authContext"

export default function FormLogin(){
    const {register, handleSubmit} = useForm();

    const [state, dispatch] = useContext(AuthContext)

    const submit = async data => {
        const response = await auth.login(data)

        dispatch({
            data: {
                ...response.data.data, 
                access_token: response.headers['access-token']
            },
            type: "SET_DATA"
        })
    }

    return(
        <div className="FormLogin" onSubmit={handleSubmit(submit)}>
            <div className="ContainerTitle">
                <PixelTitle>
                    POKEDEX
                </PixelTitle>
            </div>
            <form className="Form">
                <Input 
                    placeholder='Email' 
                    type="email"
                    showLabel 
                    textLabel="Informe seu email:"
                    register={register('email', {
                        required: true
                    })}
                />

                <Input 
                    type="password"
                    placeholder='Senha' 
                    showLabel 
                    textLabel="Informe sua senha:"
                    register={register('password', {
                        required: true
                    })}
                />

                <Button variant='primary'>
                    Login
                </Button>
                
                <Button variant='outline-primary'>
                    Registre-se
                </Button>
            </form>
        </div>
    )
}