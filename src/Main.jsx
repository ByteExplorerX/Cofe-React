import React from "react"; // Importing the React library
import CoffeeCup from "../src/assets/images/coffe-cup.svg"; // Importing the coffee cup image

function Main() {
  return (
    <main>
      {/* Container for the main content */}
      <div className="container">
        {/* Left-aligned text block */}
        <div className="middle-left">
          <h1>Coffee</h1>
          <h1>Time</h1>
        </div>

        {/* Right-aligned text block */}
        <div className="middle-right">
          <h1>Success</h1>
          <h1>Begins</h1>
          <h1>With</h1>
          <h1>Coffee</h1>
        </div>
      </div>

      {/* Image of a coffee cup */}
      <img src={CoffeeCup} alt="" />
    </main>
  );
}

export default Main; // Exporting the Main component as the default export
