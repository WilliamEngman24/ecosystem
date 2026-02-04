import OverlayForEcosystem from "../components/OverlayForEcosystem";

import { EcosystemEvaluation } from "../service/EcosystemEvaluation";

import { useState, useEffect } from "react";

function Home() {

  const [herbivores, setHerbivores] = useState([]);
  const [carnivores, setCarnivores] = useState([]);
  const [dietType, setDietType] = useState("");
  const [overlayOn, setOverlayOn] = useState(false);

  const [ecoStatus, setEcoStatus] = useState(null);
  const [ecoProblems, setEcoProblems] = useState([]);

  useEffect(()=> {

    const result = EcosystemEvaluation(carnivores, herbivores);

    setEcoProblems(result.problems);
    setEcoStatus(result.status);
    
  }, [herbivores, carnivores]);

  const addAnimal = (animalObject) => {
    {/*React requires immutability, need latest state value for safety*/}
    if(dietType === "herbivore") 
      {
        setHerbivores(prev => [...prev, animalObject]);
      }

    if(dietType === "carnivore") 
      {
        setCarnivores(prev => [...prev, animalObject]);
      }
    setDietType("");
  }

  const removeAnimal = (animalName, listType) => {

    if(listType === "herbivore") {
      setHerbivores (prev => prev.filter(animal => animal.name !== animalName));
    }
    if(listType === "carnivore") {
      setCarnivores (prev => prev.filter(animal => animal.name !== animalName));
    }
  }

  return (
    <>
    <h1>Ecosystem</h1>

    <h2>Ecosystem status: {
    ecoStatus === null ? "No inhabitants" :
    ecoStatus ? "Functional!" : "Unstable!"}
    </h2>

    {ecoStatus === false && ecoProblems.length > 0 && (
      <ul>
        {ecoProblems.map((problems, index) => (
          <li key={index}>{problems}</li>
        ))}
      </ul>
    )}

    <section>
      <article>
        <h2>Herbivores</h2>
        {herbivores.length === 0 && <p>Add some animals!</p>}

        <ul>
          {herbivores.map((animal, index) => (
            <li key={index}>
              <button onClick={() => removeAnimal(animal.name, "herbivore")}>{animal.name}</button>
            </li>
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
          {carnivores.map((animal, index) => (
            <li key={index}>
              <button onClick={() => removeAnimal(animal.name, "carnivore")}>{animal.name}</button>
            </li>
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