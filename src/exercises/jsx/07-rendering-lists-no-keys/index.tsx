/*
Given an array of friends, create a list item for every friend inside of our unordered list. Note: The items in our friends array don't have their own unique keys. You need to improvise.

TASKS
Render an unordered list with all of the friends
Each list item should display the correct name
Each list item should be given a unique key
*/

function List() {
    const friends = ["Ben", "Lynn", "Alex"];
  
    return <ul>
    </ul>;
  }
  
  export default function App() {
    return <List />;
  }
  

  /*
  Hint

  The Array.map method in JavaScript has a callback that receives 3 arguments, 
  the current element in the list, the index, and a reference to the original array. 
  If you don't have a unique key available in your data, 
  using the index as the key works – assuming you're not mutating the array.
  */

/*
Solution

import * as React from "react";

function List() {
  const friends = ["Ben", "Lynn", "Alex"];

  return (
    <ul>
      {friends.map((friend, index) => {
        return <li key={index}>{friend}</li>;
      })}
    </ul>
  );
}

export default function App() {
  return <List />;
}
*/