import { useState } from 'react';
import AddTodoForm from './AddTodoForm.jsx';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write tests', completed: true },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const next = { id: Date.now(), text, completed: false };
    setTodos((t) => [next, ...t]);
  };

  const toggleTodo = (id) => {
    setTodos((t) =>
      t.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((t) => t.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <ul aria-label="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              role="button"
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: 8,
              }}
            >
              {todo.text}
            </span>
            <button aria-label={`delete-${todo.id}`} onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
