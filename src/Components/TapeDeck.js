import { useState } from 'react';
import Tape from './Tape';
import './TapeDeck.css';

function TapeDeck() {

  const [tapeState,setTapeState] = useState({
    activeColor : "",
    activeTape : null,
    currentSong : "",
    Tapes : [{
      id : 1,
      mainColor:"pink",
      name:"Butterflies in my stomach",
      active : false
    },
    {
      id : 2,
      mainColor:"red",
      name:"Under the sheets",
      active : false
    },
    {
      id : 3,
      mainColor:"lightblue",
      name:"Cry me a river",
      active : false
    }]
  })

  const handleTapeClick = (id) => {
    if (tapeState.activeTape) {

    }
  }

  return (
    <div id="container">
      {
        tapeState.Tapes.map(tape=>{
          return <Tape className="tape" mainColor={tape.mainColor} name={tape.name}/>
        })
      }
    </div>
  );
}

export default TapeDeck;