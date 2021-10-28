import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import calculate from '../logic/calculate'

describe('Check functionality of Calculator Component', () => {
  it('renders correctly', () => {
    const object = {
      total: '',
      next: '',
      operation: '',
    };

    const updateFunction = (button) => {
      const calculator = calculate(object, button)
    }

    const tree = renderer
      .create(<Calculator variable={object} btn={updateFunction} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Check if Element is in the DOM', () => {
    const object = {
      total: '',
      next: '',
      operation: '',
    };

    const updateFunction = (button) => {
      const calculator = calculate(object, button)
    }

    render(<Calculator variable={object}  btn={updateFunction} />);
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('Let\'s Do Some Maths!')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(19);
  });
});
