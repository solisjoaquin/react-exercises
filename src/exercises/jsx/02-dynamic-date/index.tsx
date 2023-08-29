
/*
Using JavaScript, replace the static date with today's date (we made a helper function that returns today's date to help you out).

TASKS
Use the getTodaysDate function to render today's date

*/

import { getTodaysDate } from "./utils";

function Today() {
  return <p>Today is 3/8/2023</p>;
}

export default function App() {
  return <Today />;
}


/*
Solution

import { getTodaysDate } from "./utils";

function Today() {
  return <p>Today is {getTodaysDate()}</p>;
}
*/