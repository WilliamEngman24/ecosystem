//useEffect, state(in it save post data),loading and error, fetch API data

import FetchData from '../service/FetchData';

import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Animals() {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [triggerFetch, setTriggerFetch] = useState(false);    

    useEffect(() => {
        if (!triggerFetch) return;

        FetchData(searchTerm, setAnimals, setLoading, setError);

        setTriggerFetch(false);
    }, [triggerFetch]);

    if(error) {
        return <p>Error, API fail</p>
    }

    const navigate = useNavigate();

    return(
        <>
        <h1>Animals</h1>

        <input 
            type="text" 
            placeholder="Search for animals..." 
            value = {searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setTriggerFetch(true)}>SEARCH</button>

        {loading ? <p>Waiting...</p> : null}
        <ul>
            {animals.map(animals => (
                //this API does not prove an id, so use name instead
                <li key={animals.name}>
                    <button
                    onClick={() => navigate(`/animals/${animals.name}`,{
                        state: animals} //pass the data of animal to it's page
                    )}
                    >{animals.name}</button>
                </li>))
            }

        </ul>
        </>
    )
}

export default Animals
