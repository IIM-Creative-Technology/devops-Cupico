import React from "react";
import "./App.css";

import Loader from "./Animations/Loader";
//import Home from "./Home/Home";
//import Daruma from "./Daruma/Daruma";
import Nepal from "./Nepal/Nepal";
import Music from "./Music/Music";
import Album from "./Album/Album";

function App() {
  return (
    <div className="App">
      <Music />
      <Loader />
      <header className="App-header">
        {/*<Home />*/}
      </header>
      {/*<Daruma />*/}
      <Nepal />
      <Album />
    </div>
  );
}

export default App;
