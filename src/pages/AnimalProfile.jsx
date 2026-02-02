import React from 'react'

import { useLocation } from "react-router-dom";

const AnimalProfile = () => {

    const {state: animal} = useLocation();

    if(!animal) {
        return <p>No available data.</p>
    }

    let showPredidors = false;
    if(animal.characteristics.predators != null) {
        showPredidors = true;
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
        {showPredidors && (
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
