import React from 'react';
import './Calculator.css';

class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <div className="calculator-div">
      <div className="display-div">0</div>
      <div className="button-grid">
        <button type="button">Ac</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange-background">&#247;</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="orange-background">&#215;</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="orange-background">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="orange-background">+</button>
        <button type="button" className="zero">0</button>
        <button type="button">.</button>
        <button type="button" className="orange-background">=</button>
      </div>
    </div>
  )
}

export default CalculatorComponent;
