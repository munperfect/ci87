const Todo = (props) => {
  return (
    <div>
      <input type="radio" value={props.id}></input>
      <label>{props.text}</label>
    </div>
  );
};

export default Todo;
