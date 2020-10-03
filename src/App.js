import React from "react";
import "./App.css";

import Home from "./Home/Home";
import Loader from "./Animations/Loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
