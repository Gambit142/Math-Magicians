import PropTypes from 'prop-types';
import './Calculator.css';

const Calculator = (props) => {
  const { variable } = props;
  const { next, total, operation } = variable;

  const buttonClicked = (e) => {
    const { btn } = props;
    btn(e.target.innerHTML);
  };

  const buttonNames = ['AC', '+/-', '%', '\u00F7', '7', '8', '9', '\u00D7',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const generateClassName = (className) => {
    if (className === '\u00F7' || className === '\u00D7'
    || className === '-' || className === '+' || className === '=') {
      return 'orange-background';
    }
    if (className === '0') {
      return 'zero';
    }
    return '';
  };

  let result = '';
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }
  return (
    <div className="calculator-div">
      <div className="display-div">{result || 0}</div>
      <div className="button-grid">
        {buttonNames.map((button) => (<button key={button} className={generateClassName(button)} onClick={buttonClicked} type="button">{button}</button>))}
      </div>
    </div>
  );
};

Calculator.propTypes = {
  btn: PropTypes.func.isRequired,
  variable: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default Calculator;
