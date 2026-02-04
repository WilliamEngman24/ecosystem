import ItemCard from "./ItemCard"

function GroupArticle({title, animalList, animalType, onRemoveAnimal, setDietType, setOverlayOn}) {
  return (
    <article>
        <h2>{title}</h2>
        {animalList.length === 0 && <p>Add some animals!</p>}
        <ul>
          {animalList.map(animal => (
            <li key={animal.name}>
                <button onClick={() => onRemoveAnimal(animal.name, animalType)}>
                    {animal.name}
                </button>
            </li>
          ))}
        </ul>
        <button onClick={() => {
          setDietType(animalType);
          setOverlayOn(true)}}>
          Add a {animalType}
        </button>
      
    </article>
  )
}


export default GroupArticle

{/*
  
  */}
