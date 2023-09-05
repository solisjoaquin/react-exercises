/*
usePrevious is useful for tracking what a value was during the previous render. This can be particularly handy in scenarios where it's necessary to compare the current value with the previous one, such as triggering actions or rendering based on changes.

const previousValue = usePrevious(value);
For the full documentation, see usehooks.com/useprevious.

TASKS
usePrevious should return null on the first render
usePrevious should return the previous value when the current value changes
*/

import * as React from "react";

export default function usePrevious() {
  return null;
}

/*
Solution

import * as React from "react";

export default function usePrevious(value) {
  const [current, setCurrent] = React.useState(value);
  const [previous, setPrevious] = React.useState(null);

  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
  }

  return previous;
}
*/
