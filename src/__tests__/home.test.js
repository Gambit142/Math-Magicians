import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomePage from '../components/home';

describe('Test Home Page', () => {
  test('Check if Home Page renders', () => {
    render(<HomePage />);
  });

  test('Check if Element is in the DOM', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<HomePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});