function ItemCard({dataOfItem, onCardEffect}) {

    {console.log("In item below")}
    console.log(dataOfItem);
    return (
        <li key={dataOfItem.name}>
            <button onClick={() => onCardEffect(dataOfItem)}>
                {dataOfItem.name}</button>
        </li>
    );
}

export default ItemCard;