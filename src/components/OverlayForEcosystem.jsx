import ContainerSearchAndList from "./ContainerSearchAndList";


function OverlayForEcosystem({onAdd, onClose}) {

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
                <ContainerSearchAndList onSelect={handleAdd}/>
            </section>
        </section>
    )
}

export default OverlayForEcosystem
