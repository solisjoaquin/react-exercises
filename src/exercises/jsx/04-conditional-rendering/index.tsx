/*
Using an if statement, update the code to conditionally render the correct component based on the value of isLactoseTolerant.

TASKS
If the user is lactose intolerant, render the LactoseIntolerant component
If the user is lactose tolerant, render the LactoseTolerant component
*/

import { getIsLactoseTolerant } from "./utils";

function LactoseIntolerant() {
  return (
    <h1>
      <span role="img" aria-label="broccoli and strawberry">
        🥦🍓
      </span>
    </h1>
  );
}

function LactoseTolerant() {
  return (
    <h1>
      <span role="img" aria-label="milk and cheese">
        🥛🧀
      </span>
    </h1>
  );
}

export default function App() {
  const isLactoseTolerant = getIsLactoseTolerant();

  return null;
}


/*
Hint #1
JSX supports "early return" statements, which means you can use 
if statements to return the UI if a condition is met.
*/