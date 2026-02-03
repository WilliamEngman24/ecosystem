import FetchData from '../service/FetchData';

import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Animals() {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [triggerFetch, setTriggerFetch] = useState(false);    

    useEffect(() => {
        if (!triggerFetch) return;

        setLoading(true);
        setError(null);

        FetchData(searchTerm)
        .then((data) => {
            setAnimals(data);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=> {
            setLoading(false);
            setTriggerFetch(false);
        });

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

        {loading ? <p>Loading...</p> : null}
        <ul>
            {animals.map(animal => (
                //this API does not prove an id, so use name instead
                <li key={animal.name}>
                    <button
                    onClick={() => navigate(`/animals/${animal.name}`,{
                        state: animal} //pass the data of animal to it's page
                    )}
                    >{animal.name}</button>
                </li>))
            }

        </ul>
        </>
    )
}

export default Animals
