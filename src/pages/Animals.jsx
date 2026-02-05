import ContainerSearchAndList from "../components/ContainerSearchAndList";
import { useNavigate } from "react-router-dom";

function Animals() {

    const navigate = useNavigate();

    //pass the data of animal to it's own page
    const cardEffect = (animal) => {
        navigate(`/animals/${animal.name}`, {
            state : animal
        });
    };

    return(
        <>
        <h1>Animals</h1>
        <ContainerSearchAndList onSelect = {cardEffect}/>
        </>
    )
}

export default Animals
