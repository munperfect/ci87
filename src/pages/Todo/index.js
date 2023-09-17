import TodoHeader from "../../components/TodoHeader";
import TodoList from "../../components/TodoList";
import TodoFooter from "../../components/TodoFooter";
import TODOS from "../../data/todo";
import { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState(TODOS);

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

  return (
    <div>
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
