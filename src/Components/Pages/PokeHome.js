import React from 'react'

import "./PokeHome.css"

import PokeNav from '../Layout/PokeNav';
import PokeSearch from '../Layout/PokeSearch';
import PokeCard from '../Layout/PokeCard';
import { fetchPokemon } from '../Services/getPokemon';
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';


const PokeHome =  () => {

    /* Set a state variable to so when we search and call for the pokemon data.
       We can grab that pokemon and put it to the current state to change */
    const [ pokemon, setPokemon] = React.useState();

    //State variable for loading to represent the current state of http call
    //Only true when a call is made ie when button is pressed for pokemon
    const [ loading, setLoading] = React.useState(false);

    //State variable for Error handling if error occurs
    //Only true when a call is made that leads to a error
    const [ error, setError] = React.useState(false);
    const [ errorMsg, setErrorMsg] = React.useState('');


    //Function to take paramater from child component (PokeSearch) when called
    //Query is the data or pokemon name that we are grabbing from the child component
    //Make  pokeApi call here
    const getPokemon = async (query) => {
        //Error Handling if empty search
        if (!query) {
            setErrorMsg("You must enter a Pokemon");
            setError(true);
            return;
        }
        setError(false);
        setLoading(true);
        //Set timeout to add spinner for loading
        setTimeout( async () => {
            //try and catch for error handling for wrong pokemon name
            try {
                //Returns us a response which is the function fetch pokemon where we grab our url
                const response = await fetchPokemon(query);
                //Call response.json to get the data we want which is json data
                const results = await response.json();
                //Call setPokemon and set the results into pokemon
                setPokemon(results);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
                setErrorMsg('Pokemon not Found.');
            }
        }, 1500);

    }
    
    return (
        //Add prop for Search to grab the data
        //Temporary Div
        <React.Fragment>

            <PokeNav />
            <Container className="PokePalMain">
                <Row>
                    <Col>
                    {error ? (
                        <Alert variant="danger">
                            {errorMsg}
                        </Alert>
                    ) : null }
                    <PokeSearch getPokemon={getPokemon}/>
                    {loading ? (
                        <div className="PokeSpinner">
                            <Spinner animation="border"/>
                        </div>
                        ) : null }
                    {!loading && pokemon ? (
                            <PokeCard 
                                name={pokemon.name}
                                sprite={pokemon.sprites.front_default} 
                                abilities={pokemon.abilities}
                                stats={pokemon.stats}
                                types={pokemon.types}/>
                    ) : null }
                    </Col>
                    <Col>
                    {error ? (
                        <Alert variant="danger">
                            {errorMsg}
                        </Alert>
                    ) : null }
                    <PokeSearch getPokemon={getPokemon}/>
                    {loading ? (
                        <div className="PokeSpinner">
                            <Spinner animation="border"/>
                        </div>
                        ) : null }
                    {!loading && pokemon ? (
                            <PokeCard 
                                name={pokemon.name}
                                sprite={pokemon.sprites.front_default} 
                                abilities={pokemon.abilities}
                                stats={pokemon.stats}
                                types={pokemon.types}/>
                    ) : null }
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

        )
    
}

export default PokeHome;