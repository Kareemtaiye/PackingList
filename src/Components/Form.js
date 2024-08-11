import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, seQuantity] = useState(1);

  function handleSubmit(e) {
    setDescription("");
    seQuantity(1);
    e.preventDefault();

    if (!description) return;

    const item = { description, quantity, id: Date.now(), packed: false };
    onAddItems(item);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your trip</h3>
      <select value={quantity} onChange={(e) => seQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((items) => (
          <option key={items} value={items}>
            {items}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
