function Items({ items, onDeleteItems }) {
  return (
    <li>
      <input value={items.packed} type="checkbox"></input>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => onDeleteItems(items.id)}>❌</button>
    </li>
  );
}

export default Items;
