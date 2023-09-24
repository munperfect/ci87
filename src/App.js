import Header from "./components/Header";
import Home from "./pages/Home";
import TodoPage from "./pages/Todo";
import "./App.css";
import ThemeContext from "./contexts/ThemeContext";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
