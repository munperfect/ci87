import { useState } from "react";

const TodoHeader = ({ handleAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTodo) return;

    const newItem = { id: Date.now(), text: newTodo, isCompleted: false };
    handleAddTodo(newItem);

    setNewTodo("");
  }

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task here..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <hr></hr>
      </form>
    </div>
  );
};

export default TodoHeader;
