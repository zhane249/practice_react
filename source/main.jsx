import { createRoot } from "react-dom/client";

let root = createRoot(document.getElementById("diary"));

import eggURL from '../public/brownegg.glb?url'
import onionURL from '../public/greenonion.glb?url'
import tomatoURL from '../public/tomato.glb?url'
import tofuURL from '../public/tofu.glb?url'
import potatoURL from '../public/potato.glb?url'
import hamURL from '../public/ham.glb?url'
import shrimpURL from '../public/shrimp.glb?url'
import mushroomURL from '../public/mushroom.glb?url'

root.render(<Diary />)
//add more groceries with name and src
let groceries = [{
    name:"egg", src: eggURL
}, {
    name:"greenonion", src: onionURL
},
{name:"tomato", src: tomatoURL
},
{name:"tofu", src: tofuURL
},
{name:"potato", src: potatoURL
},
{name:"ham", src: hamURL
},
{name:"shrimp", src: shrimpURL
},
{name:"mushroom", src: mushroomURL
}

]


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
