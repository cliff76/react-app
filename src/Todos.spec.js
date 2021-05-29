import { fireEvent, render, screen } from '@testing-library/react';
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

  it('Has a button to add todo item',() => {
    const addTodoButton = doc.queryByRole('button');
    expect(addTodoButton).toBeInTheDocument();
  });
});

describe('our Todos component with event handling', () => {
  it('takes an onAdd event handler',() => {
    render(<Todos onAdd={jest.fn()}/>);
  });
  
  it('records todo text when add button is clicked',() => {
    const onAdd = jest.fn();
    doc = render(<Todos onAdd={onAdd}/>);
    const exampleTodo = 'buy milk';
    fireEvent.change(doc.getByLabelText(/enter todo/i), { target: {value: exampleTodo}});
    fireEvent.click(doc.getByRole('button'));
    expect(onAdd).toHaveBeenCalledWith(exampleTodo);
  });
});