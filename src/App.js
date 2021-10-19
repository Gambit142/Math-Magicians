import './App.css';
import React from 'react';
import CalculatorComponent from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <CalculatorComponent />
  )
}

export default App;
