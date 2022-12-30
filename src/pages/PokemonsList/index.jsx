import React from 'react'
import Pokemon from "./components/Pokemon";
import {BsChevronLeft} from "react-icons/bs";
import "./index.css";

export default function PokemonsList(type = 'Fogo') {
    const pokemons = [
        {
            name: 'Arcanaine',
            image: '/images/pokemons/arcanaine.png',
            number_id: '#059'
        },
        {
            name: 'Blaziken',
            image: '/images/pokemons/blaziken.png',
            number_id: '#060'
        },
        {
            name: 'Braixen',
            image: '/images/pokemons/braixen.png',
            number_id: '#061'
        }
    ]

    return (
        <div className='PokemonsList'>
            <div className='BackPage'>
                <BsChevronLeft/>
                <span>
                    Voltar
                </span>
            </div>
            <div className='PokemonArea'>
                {
                    pokemons.map(
                        (
                            pokemon,
                            index
                        ) => <Pokemon pokemon={pokemon} key={index}/>
                    )
                }
            </div>
        </div>
    );
}