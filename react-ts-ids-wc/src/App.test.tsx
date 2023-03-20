import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders React Typescript Examples title', () => {
  render(<App />);
  const titleElement = screen.getByText(/React Typescript Examples/i);
  expect(titleElement).toBeInTheDocument();
});
