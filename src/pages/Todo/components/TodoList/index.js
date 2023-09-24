import { useState } from "react";
import Todo from "../Todo";

const TodoList = ({
  todos,
  handleCompleteTodo,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  const [filterBy, setFilterBy] = useState("all");
  let sortedTodos;
  if (filterBy === "all") {
    sortedTodos = todos;
  }

  if (filterBy === "active") {
    sortedTodos = todos.slice().filter((item) => !item.isCompleted);
  }

  if (filterBy === "completed") {
    sortedTodos = todos.slice().filter((item) => item.isCompleted);
  }

  return (
    <div className="list">
      {sortedTodos.map((item) => (
        <Todo
          item={item}
          key={item.id}
          handleCompleteTodo={handleCompleteTodo}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}

      <div>
        <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="all">Filter all</option>
          <option value="active">Filter active todos</option>
          <option value="completed">Filter completed todos</option>
        </select>
      </div>
    </div>
  );
};
export default TodoList;
