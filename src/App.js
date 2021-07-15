import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Todo from "./components/todo/Todo";
import ThemeContextProvider from "./ConTexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import TodoContextProvider from "./ConTexts/ContextTodo";
import AuthContextProvider from "./ConTexts/AuthContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todo />
          </TodoContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
