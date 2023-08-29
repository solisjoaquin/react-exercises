/*
In order to persist a value across renders and 
update the UI when that value changes, we need to use 
React's useState hook. In this challenge, you'll need 
to create a button that toggles the mode state between light and dark.

TASKS
The app renders without crashing
mode defaults to dark
mode toggles between dark and light when the button is clicked
*/

import * as React from "react";

export default function App() {
  const mode = "dark";

  return (
    <main className={mode}>
      {mode === "light" ? (
        <button>Activate Dark Mode</button>
      ) : (
        <button>Activate Light Mode</button>
      )}
    </main>
  );
}

/*
Whenever you're handling an event in React, in this 
case a click event, you'll want to encapsulate the 
logic for handling that event into an event handler. 
In our example, we'll create two – one for toggling 
the mode to light and one for toggling the mode to dark.
*/

/*
Solution 

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
*/
