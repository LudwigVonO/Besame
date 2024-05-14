import { render, screen } from '@testing-library/react';
import App from './App';

test('Shows the brand name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Besame/i);
  expect(linkElement).toBeInTheDocument();
});
