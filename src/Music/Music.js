import React, { useEffect, useState } from "react";
import "./Music.css";

import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import { MdSkipNext } from "react-icons/md";

function Music() {
  useEffect(() => {
    if (!pause) {
      var audio = document.getElementById("player");
      audio.play();
      audio.volume = 0.05;
    }
  });

  const [pause, setPause] = useState(false);
  const pausePlay = () => {
    var audio = document.getElementById("player");
    if (pause === false) {
      setPause(true);
      audio.pause();
    } else {
      setPause(false);
      audio.play();
    }
  };

  const [urlMusic, setUrlMusic] = useState("lemonade");
  const nextMusic = () => {
    setUrlMusic("sundance");
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        display: "flex",
        width: "100%",
        marginLeft: "2%",
        marginTop: "1%",
      }}
    >
      <audio
        controls
        src={`music/${urlMusic}.mp3`}
        type="audio/mp3"
        id="player"
        style={{ display: "none" }}
      ></audio>
      <button
        id="pause"
        style={{
          position: "absolute",
          background: "transparent",
          border: "none",
          outline: "none",
          padding: 0,
          margin: 0,
          cursor: "pointer",
        }}
        onClick={pausePlay}
      >
        {pause ? (
          <BsPlayFill style={{ color: "black", fontSize: "4em" }} />
        ) : (
          <BsFillPauseFill style={{ color: "black", fontSize: "4em" }} />
        )}
      </button>
      <button
        id="skip"
        style={{
          position: "absolute",
          background: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          left: "3%",
        }}
        onClick={nextMusic}
      >
        <MdSkipNext className="next" />
      </button>
      <p
        style={{
          position: "absolute",
          left: "8%",
          textTransform:'uppercase',
          paddingTop:'0.2%'
        }}
      >
        {urlMusic}
      </p>
    </div>
  );
}

export default Music;
