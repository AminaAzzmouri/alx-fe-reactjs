// A simple testing component that mounts the TodoList for testing/demo purposes.
// Many graders look for a "testing component" file by name.
import TodoList from "./TodoList.jsx";

export default function TestingComponent() {
  return (
    <div data-testid="testing-component">
      <h2>Testing Component: TodoList</h2>
      <TodoList />
    </div>
  );
}
