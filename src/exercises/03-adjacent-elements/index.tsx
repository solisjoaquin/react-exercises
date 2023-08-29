/*
There's a problem with our Layout component which is preventing it from rendering correctly.

TASKS
Fix the error so the component renders correctly
*/

import * as React from "react";

function Layout() {
  return (
    <header>Header</header>
    <main>Main</main>
    <aside>Aside</aside>
    <footer>Footer</footer>
  );
}

/*
Hints

In JSX, your function must always return a single element.

If you want to return more than one element, you need to wrap the content 
in a Fragment which allows JSX to have a single element, but won't get rendered into the DOM.

There are two ways to do this. Either use the React.Fragment element or 
alternatively you can use the shorthand syntax, <></>.

*/