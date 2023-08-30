import './App.css';
import {Routes, Route} from "react-router-dom";
import StartGamePage from "./Pages/StartGamePage";
import GamePage from "./Pages/GamePage";
import GameLost from "./Pages/GameLost";
import GameWin from "./Pages/GameWin";

function App() {

  return (
        <Routes>
            <Route path="/" element={<StartGamePage/>}/>
            <Route path="/game" element={<GamePage/>}/>
            <Route path="gameLost" element={<GameLost/>}/>
            <Route path="gameWon" element={<GameWin/>}/>
        </Routes>
  );
}

export default App;
