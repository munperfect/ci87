import Todo from "../Todo";

const TodoList = ({ todos, handleCompleteTodo, handleEditTodo }) => {
  return (
    <div className="list">
      {todos.map((item) => (
        <Todo
          item={item}
          key={item.id}
          handleCompleteTodo={handleCompleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
