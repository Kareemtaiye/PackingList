import { useState } from "react";
import Items from "./Items";

function CheckingLists({
  items,
  onDeleteItems,
  onCheckedItems,
  handleClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <ul className="list">
      {sortedItems.map((item) => (
        <Items
          onCheckedItems={onCheckedItems}
          key={item.id}
          item={item}
          onDeleteItems={onDeleteItems}
        />
      ))}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by inputs</option>
          <option value="description">Sort by descriptions</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearItems}>Clear list</button>
      </div>
    </ul>
  );
}

export default CheckingLists;
