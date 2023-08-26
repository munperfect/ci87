import todos from "../../data/todo";

const TodoFooter = () => {
  const notCompletedTodos = todos.filter((todo) => !todo.isCompleted);

  return (
    <div className="footer">
      <p>{notCompletedTodos.length} tasks left</p>
      <p>MindX todolist</p>
    </div>
  );
};

export default TodoFooter;
