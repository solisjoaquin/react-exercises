/*
Given the solution code to the previous challenge, refactor this code to use a ternary operator to conditionally render the UI rather than an if statement.

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

  if (isLactoseTolerant) {
    return <LactoseTolerant />;
  }

  return <LactoseIntolerant />;
}

/*
Solution code:

export default function App() {
  const isLactoseTolerant = getIsLactoseTolerant();

  return isLactoseTolerant ? <LactoseTolerant /> : <LactoseIntolerant />;
}
*/
