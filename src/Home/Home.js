import React from "react";
import "./Home.css";

import AdiosBahamas from "./Content/AdiosBahamas";
import Bird from "./Birds/Birds";

import Plx from "react-plx";
import { buddha } from "../Animations/Parrallax";

function Home() {
  return (
    <div className="background-opening">
      <AdiosBahamas />
      <Plx className="plx-buddha" parallaxData={buddha}></Plx>
      <Bird />
    </div>
  );
}

export default Home;
