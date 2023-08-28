import './App.css';
import {useSelector} from "react-redux";


function App() {
    const player = useSelector(state => state.player);
    console.log(player);

  return (
    <div >
     <h1>labas</h1>
    </div>
  );
}

export default App;
