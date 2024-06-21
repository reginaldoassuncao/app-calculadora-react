// src/App.jsx
import React from 'react';
import Calculator from './components/Calculator';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="calculator-title">Calculadora em React</h1>
      <Calculator />
    </div>
  );
}

export default App;
