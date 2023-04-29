import {React, useState} from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Style from './Styles/Style.css'
import Cards from "./Components/Cards";

function App() {
  const [isTrueCards, setIsTrueCards] = useState(true)

  function openCards() {
    setIsTrueCards(false)
}

  return (
    <div className="App">
      
      {isTrueCards ? [<Header onChange={openCards} />, <Body />] :<Cards/>  }
    </div>
  );  
}

export default App;
