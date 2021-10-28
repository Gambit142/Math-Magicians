import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import QuotePage from '../components/quote';

describe('Check functionality of QuotePage Component', () => {
  test('Check if it renders in DOM', () => {
    render(<QuotePage />);
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
  test('Ensure that text content not included are not rendered in the DOM', () => {
    render(<QuotePage />);
    expect(screen.queryByText(/Understanding is the basics of Mathematics - Frank Geraldine/)).toBeNull();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<QuotePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});