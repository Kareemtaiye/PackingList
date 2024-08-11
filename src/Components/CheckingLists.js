import Items from "./Items";

function CheckingLists({ items, onDeleteItems, onCheckedItems }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Items
          onCheckedItems={onCheckedItems}
          key={item.id}
          item={item}
          onDeleteItems={onDeleteItems}
        />
      ))}
    </ul>
  );
}

export default CheckingLists;
