import { createRoot } from "react-dom/client";

let root = createRoot(document.getElementById("diary"));

root.render(<Diary />)
//add more groceries with name and src
let groceries = [{
    name:"egg", src:"/brownegg.glb"
}, {
    name:"greenonion", src:"/greenonion.glb"
}]


function Diary() {
  // We can do any coding in here...
  let lunch = "slice of pizza";

  let topics = [
    "JavaScript expressions",
    "JSX",
    "React state",
    "React components",
  ];

  let vibe = "tired";

  return (
    <>
      <h1>My Diary for October 14</h1>
      <p>
        Today is October {new Date().getDate()}. For lunch, I had a {lunch}.
        After finishing my {lunch}, I walked to school. Today, we're talking
        about {topics.length} things: {topics.join(", ")}. This is good, because
        computers make me feel {vibe}.
      </p>
<div className="groceries">{
    groceries.map(
        grocery => <div className={
            grocery.name
        }>
      <model-viewer
        src={
            grocery.src
        }
        camera-controls
        touch-action="pan-y"
      ></model-viewer>
</div>
    )
    }
    

      </div>
    </>
  );
}
