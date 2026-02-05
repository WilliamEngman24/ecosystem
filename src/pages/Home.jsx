import EcosystemShowcase from "../components/EcosystemShowcase";

import useEvaluation from "../hooks/useEvaluation";

import { useState } from "react";

function Home() {

  const [herbivores, setHerbivores] = useState([]);
  const [carnivores, setCarnivores] = useState([]);
  const [dietType, setDietType] = useState("");
  const [overlayOn, setOverlayOn] = useState(false);

  //uses states from hook
  const { ecoStatus, ecoProblems } = useEvaluation(carnivores, herbivores);

  const addAnimal = (animalObject) => {
    //React requires immutability, need latest state value for safety
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

  const removeAnimal = (animalName, typeOfAnimal) => {

    if(typeOfAnimal === "herbivore") {
      setHerbivores (prev => prev.filter(animal => animal.name !== animalName));
    }
    if(typeOfAnimal === "carnivore") {
      setCarnivores (prev => prev.filter(animal => animal.name !== animalName));
    }
  }

  return (
    <>
      <h1>Ecosystem</h1>

      <EcosystemShowcase
        herbivores = {herbivores}
        carnivores = {carnivores}
        ecoStatus =  {ecoStatus}
        ecoProblems = {ecoProblems}
        addAnimal = {addAnimal}
        removeAnimal = {removeAnimal}
        setDietType = {setDietType}
        overlayOn = {overlayOn}
        setOverlayOn = {setOverlayOn}
      />
    </>
  )
}

export default Home