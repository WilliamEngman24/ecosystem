import './AnimalProfile.css'
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FetchData from "../service/FetchData";

const AnimalProfile = () => {

    const { id } = useParams();
    const { state } = useLocation();

    const [animal, setAnimal] = useState(state || null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        //if coming from Animals page, use passed data
        if(animal) {
            console.log("Used Location");
            return;
        }  

        setLoading(true);

        console.log("Used Params")

        //if directly accessing page (not coming from Animals page
        FetchData(id)

        //data with mutliple animals, need to get the right one
        .then (data => {
            const correctAnimal =
            data.find(a => a.name.toLowerCase() === id.toLowerCase())
            || data[0];

            setAnimal(correctAnimal);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));

    }, [id, state]);

    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error loading animal. Type of error : {error}</p>
    }
    if(!animal) {
        return <p>No available data.</p>
    }

    let showPredators = animal.characteristics?.predators != null;

    return (
        <>
        <h1>Animal Profile</h1>

        <h2>Name: {animal.name}</h2>
        <h3>Kingdom: {animal.taxonomy.kingdom}</h3>
        <h3>Phylum: {animal.taxonomy.phylum}</h3>
        <h3>Class: {animal.taxonomy.class} </h3>
        <h3>Order: {animal.taxonomy.order}</h3>
        <h3>Family: {animal.taxonomy.family}</h3>
        <h3>Genus: {animal.taxonomy.genus}</h3>
        <h3>Scientific name: {animal.taxonomy.scientific_name}</h3>

        <br />
        <h2>Locations:</h2>
        <ul>
            {animal.locations.map((locations, index) => (
                <li key={index}>{locations}</li>
            ))}
        </ul>
        <br />

        <h2>Characteristics:</h2>
        <h3>Main prey: {animal.characteristics.main_prey || animal.characteristics.prey}</h3>

        {/*short circuit rendering*/}
        {showPredators && (
            <h3>Predators: {animal.characteristics.predators}</h3>
            )
        }

        {/*Dynamic generation*/}
        {Object.entries(animal.characteristics).map(([key, value]) => {
            if(key !== "main_prey" && key !== "predators" && key !== "prey") {
                return (
                    <p key={key}>
                        <strong>{key}:</strong> {value}
                    </p>
                )
            }})
        }
        <br />
        </>
  )
}

export default AnimalProfile
