To add an element to an array, use JavaScript's spread operator (...) to spread all the existing elements onto a new array with the new element.

```
const handleNewHighScore = (session) => {
  const newHighScores = [...highScores, session]
  setHighScores(newHighScores)
}
```

To remove an element from an array, use JavaScript's filter method to create a new array, filtering out the element that should be removed.

```
const handleRemoveCheater = (id) => {
  const newHighScores = highScores.filter((session) =>
    session.id !== id
  )
  setHighScores(newHighScores)
}
```

To update an element, use JavaScript's map method to create a new array, updating the specific element where appropriate.

```
const handleUpdateHighScore = (updatedSession) => {
  const newHighScores = highScores.map((session) => {
    return session.id === updatedSession.id
      ? updatedSession
      : session
  })
  setHighScores(newHighScores)
}
```
