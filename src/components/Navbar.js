// rafce;
import { useContext } from "react";
import { AuthContext } from "../ConTexts/AuthContext";
import { ThemeContext } from "../ConTexts/ThemeContext";
const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { isFlag, light, dark } = theme;
  const style = isFlag ? light : dark;

  const { Auth, Toggle } = useContext(AuthContext);
  return (
    <div className="navbar" style={style}>
      <h1 style={{ textAlign: "center" }}>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button type="button" onClick={Toggle}>
            {Auth ? "LogOut" : "Loggin"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
