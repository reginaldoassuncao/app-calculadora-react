// src/components/Calculator.jsx
import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState(''); // Armazena a entrada do usuário
  const [darkMode, setDarkMode] = useState(false); // Estado para o tema claro/escuro

  // Função para lidar com a entrada dos botões
  function handleInput(value) {
    // Verifica se o último caractere já é um operador
    const lastChar = input[input.length - 1];
    const operators = ['+', '-', '*', '/'];

    // Se o valor atualmente inserido e o último caractere são operadores, evita adicionar outro
    if (operators.includes(value) && operators.includes(lastChar)) {
      // Substitui o último operador pelo novo se outro operador for pressionado consecutivamente
      setInput(input.slice(0, -1) + value);
    } else {
      // Caso contrário, adiciona o valor ao input normalmente
      setInput(input + value);
    }
  }

  // Função para calcular o resultado baseado na entrada
  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Avalia a string da entrada como código JavaScript
    } catch (error) {
      setInput('Error'); // Em caso de erro na avaliação, mostra 'Error'
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

  return (
    <div className={`calculator ${darkMode ? 'dark-mode' : ''}`}>
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
  );
}

export default Calculator;
