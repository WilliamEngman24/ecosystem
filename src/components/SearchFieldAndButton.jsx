function SearchFieldAndButton({onSetSearchTerm, onTriggerSearch}) {

    return (
        <>
        <input 
            type="text" 
            placeholder="Search for animals..." 
            onChange = {(e) => onSetSearchTerm(e.target.value)}
        />
        <button onClick={onTriggerSearch}>SEARCH</button>
        </>
    );

}

export default SearchFieldAndButton;