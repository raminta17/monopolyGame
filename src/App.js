import './App.css';
import {useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import StartGamePage from "./Pages/StartGamePage";
import GamePage from "./Pages/GamePage";

function App() {
    const player = useSelector(state => state.player);
    console.log(player);

  return (

     <Routes>
         <Route path="/" element={<StartGamePage/>}/>
         <Route path="/game" element={<GamePage/>}/>
     </Routes>

  );
}

export default App;
