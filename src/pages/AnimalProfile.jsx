import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, use } from "react";
import FetchData from "../service/FetchData";

const AnimalProfile = () => {

    const { id } = useParams();
    const { state } = useLocation();

    const [animals, setAnimals] = useState(state || null);
    const [animal, setAnimal] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        //if directly accessing page (not coming from Animals page)
        if (!animals) {
            FetchData(id, setAnimals, setLoading, setError);
        }
    }, []);

    useEffect(() => {
        if(animals && animals.length > 0) {
            const correctAnimal = animals.find(currentAnimal => 
                currentAnimal.name.toLowerCase() === id.toLowerCase()
            );

            if(correctAnimal) {
                setAnimal(correctAnimal);
            }
        }
        //if coming from Animals page, use passed data
        else {
            setAnimal(animals);
        }
    }, [animals]);

    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error loading animal.</p>
    }
    if(!animal) {
        return <p>No available data.</p>
    }

    console.log(animal);
    let showPredators = false;
    if(animal.characteristics.predators != null) {
        showPredators = true;
    }

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
        {animal.locations.map((locations, index) => (
            <li key={index}>{locations}</li>
        ))}
        <br />

        <h2>Characteristics:</h2>
        <h3>Main prey: {animal.characteristics.main_prey || animal.characteristics.prey}</h3>

        {/*short circuit rendering*/}
        {showPredators && (
            <h3>Predators: {animal.characteristics.predators}</h3>
            )
        }

        {/*Dynamic generation according to the content*/}
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
