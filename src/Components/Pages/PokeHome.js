import React from 'react'

import PokeNav from '../Layout/PokeNav';
import PokeSearch from '../Layout/PokeSearch';
import { fetchPokemon } from '../Services/getPokemon';


const PokeHome =  () => {

    //Function to take paramater from child component (PokeSearch) when called
    //Query is the data or pokemon name that we are grabbing from the child component
    //Make  pokeApi call here
    const getPokemon = async (query) => {
        //gives us a response which is the function fetch pokemon where we grab our url
        const response = await fetchPokemon(query);
        console.log(response);
    }
    
    return (
        //Add prop for Search to grab the data
        //Temporary Div
        <React.Fragment>

            <PokeNav />
            <PokeSearch getPokemon={getPokemon}/>

        </React.Fragment>

        )
    
}

export default PokeHome;