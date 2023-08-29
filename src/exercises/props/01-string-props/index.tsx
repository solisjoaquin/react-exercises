/*
Currently, our Badge component is displaying hardcoded values. Instead of rendering 
the static values, we want to pass them in as props. In this challenge, your goal is 
to apply the props being passed to the Badge component (name, handle, and img) so that 
it renders correctly.

TASKS
Give the image a proper alt tag using the author's name
Make sure the badge displays the profile image correctly
Display the author's name in the badge's heading
Display the author's handle below the heading
*/

function Badge() {
    return (
      <div className="badge">
        <img alt={``} src={``} />
        <div>
          <h4>NAME</h4>
          <p>@HANDLE</p>
        </div>
      </div>
    );
  }
  
  export default function App() {
    return (
      <Badge
        name="Tyler McGinnis"
        handle="tylermcginnis"
        img="https://avatars0.githubusercontent.com/u/2933430"
      />
    );
  }

/*
Hint #1
You can access the props being passed to a component by using the props argument 
in the component's function.

Since props is always an object, you can destructure it if you'd like.
*/

/*
Solution

function Badge({ name, handle, img }) {
  return (
    <div className="badge">
      <img alt={name} src={img} />
      <div>
        <h4>{name}</h4>
        <p>@{handle}</p>
      </div>
    </div>
  );
}
 */