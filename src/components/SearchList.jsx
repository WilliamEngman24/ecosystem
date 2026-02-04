import ItemCard from "./ItemCard";

function SearchList({collection, onCardEffect}) {
    return(
        <ul>
            {console.log("In List below")}
            {console.log(collection)}
            {collection.map(item => (
                //current API does not provide an id, so use name instead
                <ItemCard 
                    key = {item.name}
                    dataOfItem = {item}
                    onCardEffect= {onCardEffect}
                />
            ))}
        </ul>
    );
}

export default SearchList;