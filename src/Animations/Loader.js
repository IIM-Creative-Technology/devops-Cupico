import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-wrapper">
      <div id="loader">
        <div id="top"></div>
        <div id="bottom"></div>
        <div id="line"></div>
      </div>
    </div>
  );
}

export default Loader;
