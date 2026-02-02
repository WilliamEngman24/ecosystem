import FetchData from '../service/FetchData';

import { useState, useEffect } from "react";

function OverlayForEcosystem({onAdd, onClose}) {

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

    const handleAdd = (selectedAnimal) => {
        if(!selectedAnimal) return;
        {/*Function from parent, passes onto parent*/}
        onAdd(selectedAnimal);
        onClose();
    }


    return (
        <section className="overlay">
            <section className="overlay-content">
                <h2>Add Animal</h2>

                <input 
                    type="text" 
                    placeholder="Search for animals..." 
                    value = {searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={() => setTriggerFetch(true)}>SEARCH</button>
            
                {loading && <p>Waiting...</p>}
                {error && <p>Error, API fail</p>}

                <ul>
            {animals.map(animal => (
                //this API does not provide an id, so use name instead
                <li key={animal.name}>
                    <button onClick={() => handleAdd(animal)}
                    >Add: {animal.name}</button>
                </li>))
            }

        </ul>
            </section>
        </section>
    )
}

export default OverlayForEcosystem
