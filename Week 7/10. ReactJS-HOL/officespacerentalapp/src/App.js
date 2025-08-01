import React from "react";
import "./App.css";

function App() {
  const sr = "https://wework.co.in/blogs/types-of-office-spaces/";

  const element = "Office Space";

  const image = (
    <img src="./office.jpg" width="25%" height="25%" alt="Office Space" />
  );

  const ItemName = {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
  };

  const colorClass = ItemName.rent <= 60000 ? "textRed" : "textGreen";

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>{element}, at Affordable Range</h1>

      {image}

      <h1>Name: {ItemName.name}</h1>
      <h3 className={colorClass}>Rent: Rs. {ItemName.rent}</h3>
      <h3>Address: {ItemName.address}</h3>
    </div>
  );
}

export default App;
