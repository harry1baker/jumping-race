import { useState } from "react";
import Menu from "./menu/Menu";
import './App.css';

function App() {
  const [ loc, setLoc ] = useState("menu");
  const changeLoc = () => {
    setLoc(loc === "menu" ? "game" : "menu");
  }
  return (
    <div className="App">
      {loc === "game" ? <h1>Game</h1> : <Menu changeLoc={changeLoc}/>}
    </div>
  );
}

export default App;
