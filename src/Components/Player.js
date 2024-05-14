import './Player.css';
import sound from '../Assets/1-14 Episode 14 - les niveaux, la chaussette, le conseiller.mp3';
import { useState } from 'react';

const musicTest = new Audio(sound);

function Player() {

  const [song,setSong]= useState();

  const togglePlay = () => {
    return musicTest.paused ? musicTest.play() : musicTest.pause()
  }
  
  return (
    <div id="player">
          {/* <div>♥︎</div> */}
          <div id="songDetails">Artist - Song</div>
          <div id="buttons">
            <div onClick={togglePlay}>⏸</div>
            <div>⏭</div>
            <div>⏹</div>
          </div>
    </div>
  );
}

export default Player;