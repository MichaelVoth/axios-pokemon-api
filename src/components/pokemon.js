import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = () => {

    const [pokemonlist, setPokemonlist] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                setPokemonlist(response.data.results)
                console.log(response.data.results)


            })
            .catch(err => { console.log(err) })
    }, []);

    return (
        <div>
            {
                pokemonlist.map((pokemon, index) => (
                    <p key={index}>{pokemon.name}</p>
                )
                )
            }
        </div>
    )
}
export default Pokemon