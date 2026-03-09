function ThemeToggle({ toggleTheme, darkMode }) {

  return (

    <button className="theme-toggle" onClick={toggleTheme}>

      {darkMode ? "☀️ Light" : "🌙 Dark"}

    </button>

  );
}

export default ThemeToggle;