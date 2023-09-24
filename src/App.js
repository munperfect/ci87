import TodoPage from "./pages/Todo";
import "./App.css";
import ThemeContext from "./contexts/ThemeContext";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="App">
        <TodoPage />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
