import './OverlayForEcosystem.css'
import ContainerSearchAndList from "../ContainerSearchAndList";

function OverlayForEcosystem({onAdd, onClose}) {

    const handleAdd = (selectedAnimal) => {
        if(!selectedAnimal) return;
        onAdd(selectedAnimal);
        onClose();
    }

    return (
        <section className = "overlay">
            <section className = "overlay_content">
                <h2>Add Animal</h2>
                <ContainerSearchAndList onSelect={handleAdd}/>
            </section>
        </section>
    )
}

export default OverlayForEcosystem
