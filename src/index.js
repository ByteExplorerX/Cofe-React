import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom/client'; // Importing the ReactDOM library
import './index.css'; // Importing the main CSS file for styling
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Importing a function for reporting web vitals

// Creating a root instance for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the App component within a React.StrictMode element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // Calling the reportWebVitals function to start measuring performance
