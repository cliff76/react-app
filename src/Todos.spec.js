import { render, screen } from '@testing-library/react';
import { Todos } from './Todos';

test('renders todos component', () => {
  render(<Todos />);
  const linkElement = screen.getByText(/Todos/i);
  expect(linkElement).toBeInTheDocument();
});
