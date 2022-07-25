import React, { useContext } from 'react'
import auth from '../../services/auth'
import { useForm } from "react-hook-form"
import PixelTitle from '../../components/PixelTitle'
import Input from '../../components/Form/Input'
import Button from '../../components/Button'
import { AuthContext } from '../../contexts/authContext'
import "./index.css"

export default function FormRegister(){
    const {register, handleSubmit} = useForm()

    const [state, dispatch] = useContext(AuthContext)

    const submit = async (data) => {
        const response = await auth.register(data)
        
        dispatch({
            type: "SET_DATA",
            data: response.data.data,
        })
    }

    return(
        <div className="FormRegister">
            <PixelTitle>
                POKEDEX
            </PixelTitle>
            <form className='Form' onSubmit={handleSubmit(submit)}>
                <Input 
                    name='name'
                    type='text'
                    showLabel
                    textLabel='Informe seu nome:'
                    placeholder='Nome'
                    register={
                        register('name', {
                            required: true
                        })
                    }
                />

                <Input 
                    name='email'
                    type='email'
                    showLabel
                    textLabel='Informe seu email:'
                    placeholder='Email'
                    register={
                        register('email', {
                            required: true
                        })
                    }
                />

                <Input 
                    name='birth_date'
                    type='date'
                    showLabel
                    textLabel='Informe sua data de nascimento:'
                    placeholder='Data de nascimento'
                    register={
                        register('birth_date', {
                            required: true
                        })
                    }
                />

                <Input 
                    name='password'
                    type='password'
                    showLabel
                    textLabel='Informe seu senha:'
                    placeholder='Senha'
                    register={
                        register('password', {
                            required: true
                        })
                    }
                />

                <Input 
                    name='password_repeat'
                    type='password'
                    showLabel
                    textLabel='Repita sua senha:'
                    placeholder='Senha'
                    register={
                        register('password_confirmation', {
                            required: true
                        })
                    }
                />

                <Button variant="primary">
                    Registrar
                </Button>
                <Button variant="outline-primary">
                    Login
                </Button>
            </form>
        </div>
    )
}