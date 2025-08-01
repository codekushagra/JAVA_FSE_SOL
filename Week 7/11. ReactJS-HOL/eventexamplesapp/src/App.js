import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  // Increment with multiple actions
  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };
  const incrementValue = () => setCount(count + 1);
  const sayHello = () => alert("Hello! Counter incremented.");

  // Decrement
  const handleDecrement = () => setCount(count - 1);

  // Welcome message
  const sayMessage = (msg) => {
    alert(`Hey: ${msg}`);
  };

  // Synthetic Event
  const handleSyntheticEvent = (e) => {
    alert("I was clicked");
  };

  return (
    <div className="container">
      
      <h1>{count}</h1>

      
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={() => sayMessage("Welcome")}>Say welcome</button>
      <br />
      <button onClick={handleSyntheticEvent}>Click on me</button>

      <hr />

      
      <CurrencyConvertor />
    </div>
  );
}

export default App;
