import React from 'react'
import './index.css'

export default function Pokemon({pokemon}) {
    return (
        <div className="Pokemon">
            <div className="PokemonDescription">
                <span>
                    {pokemon.number_id}
                </span>
                <h4>
                    {pokemon.name}
                </h4>
                <div className="LinearStick"/>
            </div>
            <div className="PokemonImage">
                <img src={pokemon.image} alt={pokemon.name}/>
            </div>
        </div>
    );
}