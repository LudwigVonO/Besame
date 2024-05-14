import { useState } from 'react';
import Tape from './Tape';
import './TapeDeck.css';

function TapeDeck() {

  const [tapeState,setTapeState] = useState({
    activeColor : "",
    currentSong : "",
    firstTape : {
      mainColor:"pink",
      active : false
    },
    secondTape : {
      mainColor:"red",
      active : false
    },
    thirdTape : {
      mainColor:"lightblue",
      active : false
    }
  })
  return (
    <div id="container">
          <Tape className="tape" mainColor="pink" name="Butterflies in my stomach"/>
          <Tape className="tape" mainColor="red" name="Under the sheets"/>
          <Tape className="tape" mainColor="lightblue" name="Cry me a river"/>
    </div>
  );
}

export default TapeDeck;