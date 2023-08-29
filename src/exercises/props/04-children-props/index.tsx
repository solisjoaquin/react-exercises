/*
Finish the Badge component so that it utilizes all the props passed to it.

TASKS
Give the image a proper alt tag using the author's name
Make sure the badge displays the profile image correctly
Display the author's name in the badge's heading
Display the author's handle below the heading
Display the bio text under the headings
Pass the click handler to the button so that it opens an alert when clicked
*/

function Badge({ name, img, handle }) {
    return (
      <div className="badge">
        <img alt={`Avatar for ${name}`} src={img} />
        <header>
          <h4>{name}</h4>
          <h6>@{handle}</h6>
        </header>
      </div>
    );
  }
  
  export default function App() {
    const handleAddFriend = () => alert("Added");
  
    return (
      <Badge
        name="Alex Brown"
        handle="alexbrown40"
        img="https://avatars.githubusercontent.com/u/67877015"
      >
        <p>
          Alex enjoys running, surfing, and binge watching the Twilight series.
        </p>
        <button onClick={handleAddFriend}>Add Friend</button>
      </Badge>
    );
  }

/*
Hint #1
Don't forget that children is a prop in React.

function Layout({ children }) {
  return (
    <div className="container">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
*/

/*
Solution

function Badge({ name, img, handle, children }) {
  return (
    <div className="badge">
      <img alt={`Avatar for ${name}`} src={img} />
      <header>
        <h4>{name}</h4>
        <h6>@{handle}</h6>
      </header>
      {children}
    </div>
  );
}
*/