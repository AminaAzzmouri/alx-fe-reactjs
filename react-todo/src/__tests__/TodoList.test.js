import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList.jsx';

describe('TodoList', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    const list = screen.getByRole('list', { name: /todo-list/i });
    expect(list).toHaveTextContent('Learn React');
    expect(list).toHaveTextContent('Write tests');
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByRole('textbox', { name: /todo-input/i }); // getByRole
    const form = screen.getByRole('form', { name: /add-todo-form/i });  // getByRole
    fireEvent.change(input, { target: { value: 'New Task' } });         // fireEvent
    fireEvent.submit(form);                                             // fireEvent
    expect(screen.getByText('New Task')).toBeInTheDocument();           // getByText
  });

  test('toggles a todo completed state when clicked', () => {
    render(<TodoList />);
    const item = screen.getByText('Learn React');
    fireEvent.click(item); // toggle on
    expect(item).toHaveStyle('text-decoration: line-through');
    fireEvent.click(item); // toggle off
    expect(item).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const target = screen.getByText('Write tests');
    const li = target.closest('li');
    const deleteBtn = within(li).getByRole('button', { name: /delete-\d+/i });
    fireEvent.click(deleteBtn); // fireEvent
    expect(screen.queryByText('Write tests')).not.toBeInTheDocument();
  });
});
