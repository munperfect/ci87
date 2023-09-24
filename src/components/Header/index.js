import { NavLink } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";
import "./styles.css";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const linkClassName = (params) => {
    return `header__link ${params.isActive ? "header__link--active" : ""}`;
  };

  return (
    <div className="header">
      <ul>
        <li>
          <NavLink className={linkClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/todo">
            Todo
          </NavLink>
        </li>
      </ul>
      <div className="theme">
        <span>Theme: </span>
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
    </div>
  );
}
