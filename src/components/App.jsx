import React, { useState } from "react";

function App() {
  const [userInput, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const updatedValue = event.target.value;
    setInput(updatedValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, userInput];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={userInput} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li> {todoItem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
