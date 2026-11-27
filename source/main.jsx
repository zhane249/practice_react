import { createRoot } from "react-dom/client";
import { useState, useEffect} from "react";
import logo from "../images/judgy_logo.png";
import closeupFridge from "../images/closeup_fridge.png";
import insideFridge from "../images/inside_fridge.png"
import kitchen from "../images/fridge_layout.jpg"

// let loadingImages = [logo, closeupFridge, insideFridge];

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
  let [scene, setScene] = useState(0);
  //screen timer
  useEffect(()=> {
   
      setTimeout(()=> setScene(1), 2000);
      setTimeout(()=> setScene(2), 4000);
      setTimeout(()=> setScene(3),6000);
      setTimeout(()=> setScene(4),8000);
    },[]);
    //logo
    if (scene ==0){
      return <img className="loading" src={logo} alt="Judgy apple looking at you" />
    }
    //kitchen
    if (scene ==1){
      return <img className="loading" src={kitchen} alt="layout of kitchen" />
    }
    //closeup fridge pic
    if (scene ==2){
      return <img className ="insideFridge" src={closeupFridge} alt="closeup of orange fridge"/>
    }
    //inside fridge
    if (scene==3){
      return <img className ="insideFridge" src={insideFridge} alt="inside the fridge layout drawing"/>
    }
    return(
      <>
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







