import React from "react";
import "./App.css";

import Loader from "./Animations/Loader";
import Home from "./Home/Home";
import Daruma from "./Daruma/Daruma";
import Nepal from "./Nepal/Nepal";


function App() {
  return (
    <div className="App">
      <Loader />
      <header className="App-header">
        <Home />
      </header>
      <Daruma />
      <Nepal />
    </div>
  );
}

export default App;
