import { useState, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const TodoHeader = ({ handleAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [estPomodoros, setEstPomodoros] = useState(1);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTodo) return;

    const newItem = {
      id: Date.now(),
      text: newTodo,
      isCompleted: false,
      estPomodoros: estPomodoros,
    };
    handleAddTodo(newItem);

    setNewTodo("");
    setEstPomodoros(1);
    setIsAdding(false);
  }

  return (
    <div className="header">
      <div className="theme">
        <span>Pick theme 👉 </span>
        {theme === "light" ? (
          <button className="btn-dark" onClick={() => setTheme("dark")}>
            🌚
          </button>
        ) : (
          <button className="btn-light" onClick={() => setTheme("light")}>
            🌞
          </button>
        )}
      </div>
      {isAdding ? (
        <>
          <input
            type="text"
            placeholder="What are you working on?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <div>
            <p className="label-pomodoro">Est Pomodoros</p>
            <input
              type="text"
              className="input-pomodoro"
              value={estPomodoros}
              onChange={(e) => setEstPomodoros(Number(e.target.value))}
            />
            <button
              className="btn-pomodoro"
              onClick={() => setEstPomodoros(estPomodoros + 1)}
            >
              🔼
            </button>
            <button
              className="btn-pomodoro"
              onClick={() => {
                if (estPomodoros > 1) {
                  setEstPomodoros(estPomodoros - 1);
                }
              }}
            >
              🔽
            </button>
          </div>
          <div className="save">
            <button className="btn-cancel" onClick={() => setIsAdding(false)}>
              Cancel
            </button>
            <button className="btn-save" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </>
      ) : (
        <button onClick={() => setIsAdding(true)} className="btn-add-task">
          ➕ Add Task
        </button>
      )}

      <hr></hr>
    </div>
  );
};

export default TodoHeader;
