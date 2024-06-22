// src/components/Calculator.jsx
import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]); // Estado para armazenar o histórico
  const [darkMode, setDarkMode] = useState(false);
  const [showHistory, setShowHistory] = useState(false); // Estado para controlar a visibilidade do histórico

  // Função para lidar com a entrada dos botões
  function handleInput(value) {
    const lastChar = input[input.length - 1];
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(value) && operators.includes(lastChar)) {
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  }

  // Função para calcular o resultado baseado na entrada
  const calculateResult = () => {
    try {
      const result = eval(input).toString();
      setInput(result);
      setHistory([...history, `${input} = ${result}`]); // Adiciona o cálculo ao histórico
    } catch (error) {
      setInput('Error');
    }
  };

  // Função para limpar a entrada
  const clearInput = () => {
    setInput('');
  };

  // Função para apagar a última entrada
  const deleteLastEntry = () => {
    setInput(input.slice(0, -1));
  };

  // Função para alternar entre tema claro e escuro
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Função para alternar a visibilidade do histórico
  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className={`calculator-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="calculator">
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="display">{input}</div>
        <div className="keypad">
          {'789/'.split('').map(char => (
            <button onClick={() => handleInput(char)} key={char}>{char}</button>
          ))}
          {'456*'.split('').map(char => (
            <button onClick={() => handleInput(char)} key={char}>{char}</button>
          ))}
          {'123-'.split('').map(char => (
            <button onClick={() => handleInput(char)} key={char}>{char}</button>
          ))}
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput('.')}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleInput('+')}>+</button>
          <button onClick={clearInput}>C</button>
          <button onClick={deleteLastEntry}>DEL</button>
        </div>
      </div>
      <div className="history-container">
        <button onClick={toggleHistory} className="toggle-history-button">
          {showHistory ? 'Esconder Histórico' : 'Ver Histórico'}
        </button>
        {showHistory && (
          <div className="history">
            <h2>Histórico</h2>
            <ul>
              {history.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
