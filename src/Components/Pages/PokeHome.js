import React from 'react'

import PokeNav from '../Layout/PokeNav';
import PokeSearch from '../Layout/PokeSearch';
import { fetchPokemon } from '../Services/getPokemon';


const PokeHome =  () => {

    /* Set a state variable to so when we search and call for the pokemon data.
       We can grab that pokemon and put it to the current state to change */
    const [ pokemon, setPokemon] = React.useState();

    //State variable for loading to represent the current state of http call
    //Only true when a call is made ie when button is pressed for pokemon
    const [ loading, setLoading] = React.useState(false);


    //Function to take paramater from child component (PokeSearch) when called
    //Query is the data or pokemon name that we are grabbing from the child component
    //Make  pokeApi call here
    const getPokemon = async (query) => {
        setLoading(true);
        //Returns us a response which is the function fetch pokemon where we grab our url
        const response = await fetchPokemon(query);
        //Call response.json to get the data we want which is json data
        const results = await response.json();
        //Call setPokemon and set the results into pokemon
        setPokemon(results);
        setLoading(false);

    }
    
    return (
        //Add prop for Search to grab the data
        //Temporary Div
        <React.Fragment>

            <PokeNav />
            <PokeSearch getPokemon={getPokemon}/>
            {!loading && pokemon ? (
                <div>
                    
                </div>
            ) : null }
        </React.Fragment>

        )
    
}

export default PokeHome;