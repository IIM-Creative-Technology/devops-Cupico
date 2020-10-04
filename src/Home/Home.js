import React from "react";
import "./Home.css";

import AdiosBahamas from "./Content/AdiosBahamas";
import Bird from "./Birds/Birds";

import Plx from "react-plx";

const parallaxData = [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
  {
    start: 200,
    duration: 300,
    properties: [
      {
        startValue: 0,
        endValue: 400,
        property: "translateY"
      },
    ],
  },
];

function Home() {
  return (
    <div className="background-opening">
      <AdiosBahamas />
      <Plx className="plx-buddha" parallaxData={parallaxData}>
        
      </Plx>

      <Bird />
    </div>
  );
}

export default Home;
