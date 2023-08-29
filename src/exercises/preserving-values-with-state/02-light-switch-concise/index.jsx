/*
In this challenge, consolidate our logic into a single 
event handler and a single button element.

TASKS
The app renders without crashing
mode defaults to dark
mode toggles between dark and light when the button is clicked
*/

import * as React from "react";

export default function App() {
  const [mode, setMode] = React.useState("dark");

  const handleDarkMode = () => {
    setMode("dark");
  };

  const handleLightMode = () => {
    setMode("light");
  };

  return (
    <main className={mode}>
      {mode === "light" ? (
        <button onClick={handleDarkMode}>Activate Dark Mode</button>
      ) : (
        <button onClick={handleLightMode}>Activate Light Mode</button>
      )}
    </main>
  );
}

/*
solution

import * as React from "react";

export default function App() {
  const [mode, setMode] = React.useState("dark");

  const handleClick = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <main className={mode}>
      <button onClick={handleClick}>
        {mode === "dark" ? "Activate Light Mode" : "Activate Dark Mode"}
      </button>
    </main>
  );
}
*/
