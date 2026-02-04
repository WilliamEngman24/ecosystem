import OverlayForEcosystem from "./OverlayForEcosystem";
import GroupArticle from "./GroupArticle"

function EcosystemShowcase({
    herbivores,
    carnivores,
    ecoStatus,
    ecoProblems,
    addAnimal,
    removeAnimal,
    setDietType,
    overlayOn,
    setOverlayOn
}) {
  return (
    <section>
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
            
        <GroupArticle
            title = {"Herbivores"}
            animalList = {herbivores}
            animalType = {"herbivore"}
            onRemoveAnimal = {removeAnimal}
            setDietType = {setDietType}
            setOverlayOn = {setOverlayOn}
        />

        <GroupArticle
            title = {"Carnivores"}
            animalList = {carnivores}
            animalType = {"carnivore"}
            onRemoveAnimal = {removeAnimal}
            setDietType = {setDietType}
            setOverlayOn = {setOverlayOn}
        />

        {overlayOn && (
            <OverlayForEcosystem
            onAdd = {addAnimal}
            onClose = {() => setOverlayOn(false)} 
            />
        )}
        </section>
    </section>
  )
}

export default EcosystemShowcase
