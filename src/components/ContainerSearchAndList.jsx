import SearchFieldAndButton from "./SearchFieldAndButton";
import SearchList from "./SearchList/SearchList";
import useAnimalSearch from "../hooks/useAnimalSearch";

function ContainerSearchAndList({onSelect}){
    const {
        data,
        loading,
        error,
        setSearchTerm,
        triggerSearch
    } = useAnimalSearch();

    return (
        <>
            <SearchFieldAndButton
                onSetSearchTerm={setSearchTerm}
                onTriggerSearch={triggerSearch}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}

            <SearchList
                collection={data}
                onCardEffect={onSelect}
            />
        </>
    );
    
}

export default ContainerSearchAndList;