import React from "react";
import "./Birds.css";

function Bird() {
  return (
    <div className="container">
	
	<div className="bird-container bird-container--one">
		<div className="bird bird--one"></div>
	</div>
	
	<div className="bird-container bird-container--two">
		<div className="bird bird--two"></div>
	</div>
	
	<div className="bird-container bird-container--three">
		<div className="bird bird--three"></div>
	</div>
	
</div>

  );
}

export default Bird;
