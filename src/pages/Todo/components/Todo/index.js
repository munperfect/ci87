import { useState } from "react";

const Todo = ({
  item,
  handleCompleteTodo,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newEditedTodo, setNewEditedTodo] = useState(item.text);

  function handleToggleEditing() {
    setIsEditing(!isEditing);
  }

  function handleSubmitEdit(e) {
    if (e.key === "Enter" && newEditedTodo) {
      handleEditTodo(item.id, newEditedTodo);
      handleToggleEditing();
    }
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => handleCompleteTodo(item.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={newEditedTodo}
          onChange={(e) => setNewEditedTodo(e.target.value)}
          onKeyDown={handleSubmitEdit}
        />
      ) : (
        <label
          style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
          onDoubleClick={handleToggleEditing}
        >
          {item.text}
        </label>
      )}

      <span className="pomodoro">{item.estPomodoros}</span>

      <button onClick={() => handleDeleteTodo(item.id)} className="delete">
        Delete
      </button>
    </div>
  );
};

export default Todo;
