import React from "react";
import "./Daruma.css";

import Plx from "react-plx";
import {
  circleLeft,
  circleRight,
  daruma,
  nepal,
  cloud0,
  cloud1,
  cloud2,
  buddha,
  title,
} from "../Animations/Parrallax";

function Daruma() {
  return (
    <Plx
      id="container-darumaa"
      className="container-daruma"
      parallaxData={daruma}
    >
      <div className="container-circle">
        <Plx className="circle-left" parallaxData={circleLeft}></Plx>
        <Plx className="circle-right" parallaxData={circleRight}></Plx>
        <Plx className="plx-buddha" parallaxData={buddha}></Plx>
        <Plx className="nepal-picture-left" parallaxData={nepal}></Plx>
        <Plx className="cloud-0" parallaxData={cloud0}></Plx>
        <Plx className="cloud-1" parallaxData={cloud1}></Plx>
        <Plx className="cloud-2" parallaxData={cloud2}></Plx>
      </div>
      <Plx className="container-title" parallaxData={title}>
        <ul className="title-left">
          <li>
            Opening <br />
            {/*<span>オープニング</span> */}
          </li>
          <li>
            Ennemies Pt. 2 <br />  {/*<span>敵</span>*/}
          </li>
          <li>
            En face
            <br />  {/* <span>敵</span>*/}
          </li>
          <li>
            Trajectoire
            <br />
            {/*<span>道</span>*/}
          </li>
          <li>
            Vibe
            <br />
            {/*<span>雰囲気</span>*/}
          </li>
          <li>
            Lemonade
            <br />
            {/*<span>レモネード</span>*/}
          </li>
          <li>
            Là-bas
            <br />
            {/*<span>あそこ</span>*/}
          </li>
          <li>
            Sundance
            <br />
           {/* <span>サンダンス</span>*/}
          </li>
          <li>
            Millionaire
            <br />
            {/*<span>富豪</span>*/}
          </li>
          <li>
            Sans voir
            <br />
           {/* <span>見ずに</span>*/}
          </li>
          <li>
            Crossfader
            <br />
            {/*<span>クロスフェーダー</span>*/}
          </li>
          <li>
            Daruma
            <br />
             {/*<span>だるま</span>*/}
          </li>
        </ul>
      </Plx>
    </Plx>
  );
}

export default Daruma;
