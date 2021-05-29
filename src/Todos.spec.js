import { render, screen } from '@testing-library/react';
import { Todos } from './Todos';

describe('Our Todos component', () => {
  beforeEach(() => {
    render(<Todos />);
  });

  it('renders a todos title', () => {
    const expectedText = screen.getByText(/Todo List/i);
    expect(expectedText).toBeInTheDocument();
  });
});
