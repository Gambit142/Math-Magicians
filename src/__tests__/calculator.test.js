import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Check functionality of Calculator Component', () => {
  it('renders correctly', () => {
    const object = {
      total: '',
      next: '',
      operation: '',
    };

    const tree = renderer
      .create(<Calculator variable={object} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Check if Element is in the DOM', () => {
    const object = {
      total: '',
      next: '',
      operation: '',
    };

    render(<Calculator variable={object} />);
    screen.debug();
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('Let\'s Do Some Maths!')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(19);
  });
});
