import Todo from "../Todo";

const TodoList = () => {
  return (
    <div className="list">
      <Todo id={1} text="Clean up the bathroom" />
      <Todo id={2} text="Buy some milk" />
      <Todo id={3} text="Jog" />
      <Todo id={4} text="Learn React" />
      <Todo id={5} text="Learn exercises" />
    </div>
  );
};
export default TodoList;
