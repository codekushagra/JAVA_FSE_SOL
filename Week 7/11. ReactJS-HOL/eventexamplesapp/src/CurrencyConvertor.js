import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert("Please enter amount in Euro");
      return;
    }

    const convertedAmount = amount * 80; // 1 Euro = 80 INR
    alert(`Converting to Euro Amount is ${convertedAmount}`);
  };

  return (
    <div>
      <h2 className="heading">Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <label>Currency:</label>
        <select>
          <option>Euro</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
