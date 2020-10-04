import React from "react";
import "./Home.css";

import AdiosBahamas from "./Content/AdiosBahamas";
import Bird from "./Birds/Birds";

function Home() {
  return (
    <div className="background-opening">
      <AdiosBahamas />
      <Bird />
    </div>
  );
}

export default Home;
