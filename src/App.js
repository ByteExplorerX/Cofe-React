import React from "react"; // Importing the React library
import Nav from "./Nav"; // Importing the Nav component from the Nav.js file
import Main from "./Main"; // Importing the Main component from the Main.js file
import SecondPart from "./Second-part"; // Importing the SecondPart component from the Second-part.js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing the Bootstrap CSS file

function App() {
  return (
    <div>
      {/* Rendering the Nav component */}
      <Nav />
      {/* Rendering the Main component */}
      <Main />
      {/* Rendering the SecondPart component */}
      <SecondPart />
    </div>
  );
}

export default App; // Exporting the App component as the default export
