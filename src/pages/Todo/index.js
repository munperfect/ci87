import TodoHeader from "../../components/TodoHeader";
import TodoList from "../../components/TodoList";
import TodoFooter from "../../components/TodoFooter";
import TODOS from "../../data/todo";
import { useState, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./styles.css";

const TodoPage = () => {
  const [todos, setTodos] = useState(TODOS);
  const themeContext = useContext(ThemeContext);

  function handleAddTodo(newTodo) {
    setTodos((todos) => [...todos, newTodo]);
  }

  function handleCompleteTodo(id) {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  function handleEditTodo(id, text) {
    setTodos((todos) =>
      todos.map((item) => (item.id === id ? { ...item, text: text } : item))
    );
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((item) => item.id !== id));
  }

  const todoPageClassName = `todo-page ${
    themeContext.theme === "light" ? "todo-page--light" : "todo-page--dark"
  }`;

  return (
    <div className={todoPageClassName}>
      <TodoHeader handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoFooter todos={todos} />
    </div>
  );
};

export default TodoPage;
