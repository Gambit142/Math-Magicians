import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';
import NavigationLinks from './links';
import HomePage from './components/home';
import QuotePage from './components/quote';

const App = () => {
  const [object, updateCalculatorObject] = useState({
    total: '',
    next: '',
    operation: '',
  });
  const updateButton = (currentButton) => {
    const calculatorObject = calculate(object, currentButton);
    updateCalculatorObject(calculatorObject);
  };

  return (
    <>
      <NavigationLinks />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/calculator">
          <Calculator btn={updateButton} variable={object} />
        </Route>
        <Route path="/quotes">
          <QuotePage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
