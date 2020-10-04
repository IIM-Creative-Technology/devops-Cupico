import React from "react";
import "./App.css";

import Home from "./Home/Home";
import Daruma from "./Daruma/Daruma";
import Loader from "./Animations/Loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <header className="App-header">
        <Home />
      </header>
      <Daruma />
    </div>
  );
}

export default App;
