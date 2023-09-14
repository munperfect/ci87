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

  return (
    <div>
      <TodoHeader handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <TodoFooter todos={todos} />
    </div>
  );
};

export default TodoPage;
