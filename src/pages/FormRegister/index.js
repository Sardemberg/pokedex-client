import React from 'react'
import PixelTitle from '../../components/PixelTitle'
import Input from '../../components/Form/Input'
import Button from '../../components/Button'
import "./index.css"

export default function FormRegister(){
    return(
        <div className="FormRegister">
            <PixelTitle>
                POKEDEX
            </PixelTitle>
            <div className='Form'>
                <Input 
                    name='name'
                    type='text'
                    showLabel
                    textLabel='Informe seu nome:'
                    placeholder='Nome'
                />

                <Input 
                    name='email'
                    type='email'
                    showLabel
                    textLabel='Informe seu email:'
                    placeholder='Email'
                />

                <Input 
                    name='birth_date'
                    type='date'
                    showLabel
                    textLabel='Informe sua data de nascimento:'
                    placeholder='Data de nascimento'
                />

                <Input 
                    name='password'
                    type='password'
                    showLabel
                    textLabel='Informe seu senha:'
                    placeholder='Senha'
                />

                <Input 
                    name='password_repeat'
                    type='password'
                    showLabel
                    textLabel='Repita sua senha:'
                    placeholder='Senha'
                />

                <Button variant="primary">
                    Registrar
                </Button>
                <Button variant="outline-primary">
                    Login
                </Button>
            </div>
        </div>
    )
}