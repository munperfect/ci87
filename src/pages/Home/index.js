import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./styles.css";

export default function Home() {
  const themeContext = useContext(ThemeContext);

  const homePageClassName = `home-page ${
    themeContext.theme === "light" ? "home-page--light" : "home-page--dark"
  }`;

  return (
    <div className={homePageClassName}>
      <h1>Home</h1>
    </div>
  );
}
