import { useState } from "react";

const Todo = ({ item, handleCompleteTodo, handleEditTodo }) => {
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
    <div>
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
    </div>
  );
};

export default Todo;
