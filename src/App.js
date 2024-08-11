import { useState } from "react";
import Form from "./Components/Form";
import CheckingLists from "./Components/CheckingLists";
import Stats from "./Components/Stats";
import Logo from "./Components/Logo";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      [...items].map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <CheckingLists
        onCheckedItems={handleToggleItems}
        onDeleteItems={handleDeleteItems}
        items={items}
      />
      <Stats />
    </div>
  );
}

// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// function App() {
//   const [step, setSteps] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) {
//       setSteps((s) => s - 1);
//     }
//   }

//   function handleNext() {
//     if (step < 3) {
//       setSteps((s) => s + 1);
//     }
//   }
//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((cur) => !cur)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <div className="message">
//             <p>Hello React</p>
//           </div>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
