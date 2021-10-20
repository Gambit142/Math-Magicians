import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(e) {
    const { btn } = this.props;
    btn(e.target.innerHTML);
  }

  render() {
    const { variable } = this.props;
    const { next, total } = variable;
    return (
      <div className="calculator-div">
        <div className="display-div">{!next ? total : next}</div>
        <div className="button-grid">
          <button onClick={this.buttonClicked} type="button">AC</button>
          <button onClick={this.buttonClicked} type="button">+/-</button>
          <button onClick={this.buttonClicked} type="button">%</button>
          <button onClick={this.buttonClicked} type="button" className="orange-background">&#247;</button>
          <button onClick={this.buttonClicked} type="button">7</button>
          <button onClick={this.buttonClicked} type="button">8</button>
          <button onClick={this.buttonClicked} type="button">9</button>
          <button onClick={this.buttonClicked} type="button" className="orange-background">&#215;</button>
          <button onClick={this.buttonClicked} type="button">4</button>
          <button onClick={this.buttonClicked} type="button">5</button>
          <button onClick={this.buttonClicked} type="button">6</button>
          <button onClick={this.buttonClicked} type="button" className="orange-background">-</button>
          <button onClick={this.buttonClicked} type="button">1</button>
          <button onClick={this.buttonClicked} type="button">2</button>
          <button onClick={this.buttonClicked} type="button">3</button>
          <button onClick={this.buttonClicked} type="button" className="orange-background">+</button>
          <button onClick={this.buttonClicked} type="button" className="zero">0</button>
          <button onClick={this.buttonClicked} type="button">.</button>
          <button onClick={this.buttonClicked} type="button" className="orange-background">=</button>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  btn: PropTypes.func.isRequired,
  variable: PropTypes.shape.isRequired,
};

export default Calculator;
