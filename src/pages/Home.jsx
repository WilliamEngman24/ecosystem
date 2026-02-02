import OverlayForEcosystem from "../components/OverlayForEcosystem";

import { useState } from "react";

function Home() {

  const [herbivores, setHerbivores] = useState([]);
  const [carnivores, setCarnivores] = useState([]);
  const [dietType, setDietType] = useState("");
  const [overlayOn, setOverlayOn] = useState(false);

  const addAnimal = (animalName) => {
    {/*React requires immutability, need latest state value for safety*/}
    if(dietType === "herbivore") 
      {
        setHerbivores(prev => [...prev, animalName]);
      }

    if(dietType === "carnivore") 
      {
        setCarnivores(prev => [...prev, animalName]);
      }

    setOverlayOn(false);
    setDietType(null);
  }
  return (
    <>
    <h1>Ecosystem</h1>

    <section>
      <article>
        <h2>Herbivores</h2>
        {herbivores.length === 0 && <p>Add some animals!</p>}

        <ul>
          {herbivores.map((herbivores, index) => (
            <li key={index}>{herbivores.name}</li>
          ))}
        </ul>
        <button onClick={() => {
          setDietType("herbivore");
          setOverlayOn(true)}}>
          Add Animal
        </button>
      </article>

      <article>
        <h2>Carnivores</h2>
        {carnivores.length === 0 && <p>Add some animals!</p>}

        <ul>
          {carnivores.map((carnivores, index) => (
            <li key={index}>{carnivores.name}</li>
          ))}
        </ul>
        <button onClick={() => {
          setDietType("carnivore");
          setOverlayOn(true)}}>
          Add Animal
        </button>
      </article>

      {overlayOn && (
        <OverlayForEcosystem
          onAdd = {addAnimal}
          onClose = {() => setOverlayOn(false)} 
        />
      )}
    </section>
    </>
  )
}

export default Home