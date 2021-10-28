import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationLinks from '../links';

describe('Navigation Links Tests', () => {
  test('Check if Component Renders in DOM', () => {
    render(
      <Router>
        <NavigationLinks />
      </Router>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    expect(screen.queryByText(/Math Magicians/)).toBeTruthy();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <NavigationLinks />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
