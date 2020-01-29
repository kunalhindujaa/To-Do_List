import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

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
    setInput("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
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
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
