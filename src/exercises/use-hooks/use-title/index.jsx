/*
useDocumentTitle allows you to dynamically update the title of a webpage.

useDocumentTitle("New Title")
For the full documentation, see usehooks.com/usedocumenttitle.

TASKS
Update the document's title with the first argument passed to useDocumentTitle
Update the document's title when the first argument passed to useDocumentTitle changes
*/

import * as React from "react";

export default function useDocumentTitle() {}

/*
Solution

import * as React from "react"

export default function useDocumentTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}
*/