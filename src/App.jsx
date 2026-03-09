import { useState } from 'react'
import './App.css'
import { evaluate } from "mathjs";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import History from "./components/History";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("0");
      return;
    }

    if (value === "=") {
      try {
        const evalResult = evaluate(expression);
        setResult(evalResult);

        const entry = `${expression} = ${evalResult}`;
        setHistory([entry, ...history]);

      } catch {
        setResult("Error");
      }
      return;
    }

    setExpression(expression + value);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (

    <div className={darkMode ? "app dark" : "app"}>

      <div className="calculator">

        <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />

        <Display expression={expression} result={result} />

        <Keypad onClick={handleClick} />

        <History history={history} />

      </div>

    </div>

  );
}

export default App
