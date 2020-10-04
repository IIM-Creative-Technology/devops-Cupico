import React from "react";
import "./Daruma.css";

import Plx from "react-plx";
import { circleLeft, circleRight, daruma } from "../Animations/Parrallax";

function Daruma() {
  return (
    <Plx className="container-daruma" parallaxData={daruma}>
      <div className="container-circle">
        <Plx className="circle-left" parallaxData={circleLeft}></Plx>
        <Plx className="circle-right" parallaxData={circleRight}></Plx>
      </div>
    </Plx>
  );
}

export default Daruma;
