
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';  // If you have global styles

// Create a root container where your React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
