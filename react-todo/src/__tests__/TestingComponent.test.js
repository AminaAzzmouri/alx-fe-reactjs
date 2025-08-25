import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestingComponent from "../components/TestingComponent.jsx";

describe("Testing Component Wrapper", () => {
  test("renders Testing Component and TodoList", () => {
    render(<TestingComponent />);
    expect(screen.getByTestId("testing-component")).toBeInTheDocument();
    expect(screen.getByText(/Testing Component: TodoList/i)).toBeInTheDocument();
    // verifies TodoList rendered inside
    expect(screen.getByRole("list", { name: /todo-list/i })).toBeInTheDocument();
  });
});
