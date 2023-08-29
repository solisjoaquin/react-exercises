/*
Now that you know how to add preserve state in React, let's revisit our Character Limit challenge from earlier in the course and make it a little more sophisticated.

The goal of this app is to get some input from the user, but only "submit" that input if its length is less than 20 characters. Unlike our other "Character Limit" challenges, this one shows the user how many characters they have left before they hit the limit.

TASKS
LimitedTextInput renders an input and submit button
Update the remaining characters count when the user types
Add an error class to the "Characters remaining:" span element when the user exceeds the character limit and a no-error when they haven't
alert "The input exceeds the character limit. Please shorten your text." when the user submits a form with too many characters
alert "Thanks for your submission" when the user submits a form with an acceptable number of characters
*/

import React from "react";

function LimitedTextInput({ characterLimit = 20 }) {
  const inputValue = "";

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // if input length is too long
    // alert "The input exceeds the character limit. Please shorten your text."
    // else
    // alert "Thanks for your submission"
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className="no-error">Characters remaining: TODO</span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default LimitedTextInput;
