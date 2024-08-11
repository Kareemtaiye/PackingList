import Items from "./Items";

function CheckingLists({ items, onDeleteItems }) {
  return (
    <ul className="list">
      {items.map((items) => (
        <Items key={items.id} items={items} onDeleteItems={onDeleteItems} />
      ))}
    </ul>
  );
}

export default CheckingLists;
