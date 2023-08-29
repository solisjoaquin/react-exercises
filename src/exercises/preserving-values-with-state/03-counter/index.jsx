import * as React from "react";

export default function App() {
  const count = 0;

  return (
    <main>
      <span>{count}</span>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </main>
  );
}

/*
Solution

import * as React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <main>
      <span>{count}</span>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </main>
  );
}
*/
