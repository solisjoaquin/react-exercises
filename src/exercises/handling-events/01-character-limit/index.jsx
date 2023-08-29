/*
Whenever we're dealing with events in React, we can extract the logic for those events into their own event handlers. The goal with this challenge is to make it so when the user types more than 10 characters into the input field, they'll get an alert that says "Character limit exceeded".

TASKS
Don't show an alert if the input is under the character limit
Show an alert if the input exceeds the character limit
*/

export default function App() {
  return (
    <section>
      <h1>Character Limit</h1>
      <input placeholder="Enter some text" />
    </section>
  );
}

/*
Hint

Because we're dealing with events, you'll first want to create an event handler that you can pass as an onChange prop to your input field.

function handleChange() {}

...

<input onChange={handleChange}>

Hint 2

When you pass a function as an onChange prop, when the event occurs, React will invoke that function passing it information about the event as the first argument. You can use that first argument to get the text in the input field using event.target.value.

function handleChange(event) {
  const text = event.target.value;
}
*/

/**
 Solution 
 
export default function App() {
  const handleChange = (event) => {
    if (event.target.value.length > 10) {
      alert("Character limit exceeded");
    }
  };

  return (
    <section>
      <h1>Character Limit</h1>
      <input onChange={handleChange} placeholder="Enter some text" />
    </section>
  );
}
 */
