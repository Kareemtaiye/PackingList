function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Get started on packing your items for your journey</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <p>
        <em>
          {percentage === 100
            ? "All items are packed and you are ready to 😊👍"
            : `You have ${numItems} items on your list and you have already packed ${numPacked} (${percentage}%)`}
        </em>
      </p>
    </footer>
  );
}

export default Stats;
