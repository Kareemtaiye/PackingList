function Items({ item, onDeleteItems, onCheckedItems }) {
  return (
    <li>
      <input
        onChange={() => onCheckedItems(item.id)}
        value={item.packed}
        type="checkbox"
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

export default Items;
