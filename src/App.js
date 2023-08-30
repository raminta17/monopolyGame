import './App.css';
import {Routes, Route} from "react-router-dom";
import StartGamePage from "./Pages/StartGamePage";
import GamePage from "./Pages/GamePage";
import GameLost from "./Pages/GameLost";

function App() {

  return (

        <Routes>
            <Route path="/" element={<StartGamePage/>}/>
            <Route path="/game" element={<GamePage/>}/>
            <Route path="gameOver" element={<GameLost/>}/>
        </Routes>



  );
}

export default App;
