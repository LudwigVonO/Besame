import './App.css';
import Player from './Components/Player';
import './Components/Tape.css';
import TapeDeck from './Components/TapeDeck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="headerSection">
          <h1>Besame</h1>
          <h4>Radio</h4>
        </div>
        <div id="content">
          <TapeDeck/>
          <Player/>
        </div>
      </header>
    </div>
  );
}

export default App;
