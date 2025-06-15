function List(props) {

    const category = props.category
    const itemList = props.items;

    const listItems = itemList.map(item => (

        <li key={item.id}>
            {item.name}: <b>{item.calories}</b>
        </li>
        
    ));

    return (
        <>
            <p className="text-3xl">{category}</p><br/>
            <ol>{listItems}</ol><br/>
        </>
    );
}

export default List;