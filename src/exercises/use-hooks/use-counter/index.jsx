/*
useCounter is a hook for managing a numeric counter value. It allows you to specify a min and max value, then gives you helper methods (increment, decrement, set, and reset) for managing the value.

const [count, { increment, decrement, set, reset }] = useCounter(initialCountValue, {
  min: 5,
  max: 10
});
For the full documentation, see usehooks.com/usecounter.

TASKS
As its first argument, useCounter should accept a starting value and default it to 0 if no value is provided
As its second argument, useCounter should also accept an object with min and max values and throw an error if the starting value is outside of that range
useCounter should return an array with the first item being the current value of count and the second being an object with increment, decrement, set, and reset methods
useCounter should increment the count value by 1 when increment is called (unless the max value is reached)
useCounter should decrement the count value by 1 when decrement is called (unless the min value is reached)
useCounter should set the count value to the provided value when set is called (unless the min or max value is reached)
useCounter should reset the count value to the starting value when reset is called (unless the count value is already the starting value)
*/

import * as React from "react";

export default function useCounter(startingValue = 0, options = {}) {
  const { min, max } = options;

  if (min && startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`
    );
  }

  if (max && startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`
    );
  }

  const [count, setCount] = React.useState(startingValue);

  const increment = () => {};

  const decrement = () => {};

  const set = (nextCount) => {};

  const reset = () => {};

  return [
    count,
    {
      increment,
      decrement,
      set,
      reset,
    },
  ];
}

/*
import * as React from "react";

export default function useCounter(startingValue = 0, options = {}) {
  const { min, max } = options;

  if (min && startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`
    );
  }

  if (max && startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`
    );
  }

  const [count, setCount] = React.useState(startingValue);

  const increment = () => {
    const nextCount = count + 1;
    if (max && nextCount > max) {
      return;
    }

    setCount(nextCount);
  };

  const decrement = () => {
    const nextCount = count - 1;
    if (min && nextCount < min) {
      return;
    }

    setCount(nextCount);
  };

  const set = (nextCount) => {
    if (max && nextCount > max) {
      return;
    }

    if (min && nextCount < min) {
      return;
    }

    if (nextCount === count) {
      return;
    }

    setCount(nextCount);
  };

  const reset = () => {
    if (count === startingValue) {
      return;
    }

    setCount(startingValue);
  };

  return [
    count,
    {
      increment,
      decrement,
      set,
      reset
    }
  ];
}
*/
