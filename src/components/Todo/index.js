const Todo = ({ id, text, isCompleted }) => {
  return (
    <div>
      <input type="checkbox" checked={isCompleted} />
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {text}
      </span>
    </div>
  );
};

export default Todo;
