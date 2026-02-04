function ItemCard({dataOfItem, onCardEffect}) {

    return (
        <button onClick={() => onCardEffect(dataOfItem)}>
            {dataOfItem.name}
        </button>
    );
}

export default ItemCard;