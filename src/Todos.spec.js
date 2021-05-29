import { render, screen } from '@testing-library/react';
import { Todos } from './Todos';

let doc;
describe('Our Todos component', () => {
  beforeEach(() => {
    doc = render(<Todos />);
  });

  it('renders a todos title', () => {
    const expectedText = screen.getByText(/Todo List/i);
    expect(expectedText).toBeInTheDocument();
  });

  it('contains an input form',() => {
    const todoInputForm = doc.queryByRole('form');
    expect(todoInputForm).toBeInTheDocument();
  });

  it('has an input field for todo Items',() => {
    const textInput = doc.queryByLabelText('Enter Todo');
    expect(textInput).toBeInTheDocument();
  });
});
