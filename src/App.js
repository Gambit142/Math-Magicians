import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateButton = this.updateButton.bind(this);
  }

  updateButton(currentButton) {
    const calculatorObject = calculate(this.state, currentButton);
    this.setState(calculatorObject);
  }

  render() {
    return (
      <Calculator btn={this.updateButton} variable={this.state} />
    );
  }
}

export default App;
