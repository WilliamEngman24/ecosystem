import ItemCard from "./ItemCard";

function SearchList({collection, onCardEffect}) {
    return(
        <ul>
            {collection.map(item => (
                //current API does not provide an id, so use name instead
                <li key={item.name}>
                    <ItemCard 
                        dataOfItem = {item}
                        onCardEffect= {onCardEffect}
                    />
                </li>
            ))}
        </ul>
    );
}

export default SearchList;