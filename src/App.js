import './App.css';
import {Routes, Route} from "react-router-dom";
import StartGamePage from "./Pages/StartGamePage";
import GamePage from "./Pages/GamePage";

function App() {

  return (

        <Routes>
            <Route path="/" element={<StartGamePage/>}/>
            <Route path="/game" element={<GamePage/>}/>
        </Routes>



  );
}

export default App;
