import Todo from "../Todo";
import todos from "../../data/todo";

const TodoList = () => {
  return (
    <div className="list">
      {todos.map((todo) => (
        <Todo id={todo.id} text={todo.todo} isCompleted={todo.isCompleted} />
      ))}
    </div>
  );
};
export default TodoList;
