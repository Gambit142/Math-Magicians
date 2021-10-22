import './App.css';
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

const App = () => {
  const [object, updateCalculatorObject] = useState({});
  const updateButton = (currentButton) => {
    const calculatorObject = calculate(object, currentButton);
    updateCalculatorObject(calculatorObject);
  };
  return (
    <Calculator btn={updateButton} variable={object} />
  );
};

export default App;
