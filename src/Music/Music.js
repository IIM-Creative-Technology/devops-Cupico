import React, { useEffect, useState } from "react";
import "./Music.css";

import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import { MdSkipNext } from "react-icons/md";

import { titles } from "../Constant";

const random = () => {
  return titles[Math.floor(Math.random() * Math.floor(titles.length))].name;
};

function Music() {
  const [urlMusic, setUrlMusic] = useState(random()); // la musique qui est jouée
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const audio = document.getElementById("player");
    audio.volume = 0.1;

    window.onscroll = function (e) {
      setScroll(window.scrollY);
    };
  
      const interval = setInterval(() => {
        let time = audio.currentTime;
  
        //////////// FOR VIBE
        if (time > 1 && time < 2) {
          setTimeMusic("TEST");
        }
        else if (time > 10 && time < 11 && urlMusic) {
          setTimeMusic("VIBE");
        }
        else if (time > 16 && time < 17 && urlMusic) {
          setTimeMusic("VIBE");
        }
        else if (time > 26 && time < 27 && urlMusic === "vibe") {
          setTimeMusic("Si j'ai capte une vibe");
        } else {
          setTimeMusic("");
        }
        //////////// END OF VIBE
      }, 1000);
      return () => clearInterval(interval);
    }, [urlMusic]);


  const [timeMusic, setTimeMusic] = useState("");

  const [pause, setPause] = useState(true);
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

  const nextMusic = async () => {
    let newTitles = await titles.filter((e) => e.name !== urlMusic);
    await setUrlMusic(
      newTitles[Math.floor(Math.random() * Math.floor(newTitles.length))].name
    );
    let audio = await document.getElementById("player");
    await audio.play();
    await setPause(false);
  };

  let whiteButton = { color: "black", fontSize: "4em" };

  let blackButton = { color: "white", fontSize: "4em" };


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
      {timeMusic !== "" && (
        <div
          style={{
            width: "400px",
            height: "100px",
            position: "fixed",
            fontSize: "3em",
            top: Math.floor(Math.random() * Math.floor(90)) + "%",
            left: Math.floor(Math.random() * Math.floor(90)) + "%",
            color: scroll > 1650 ? "white" : "black",
          }}
          className="animeword"
        >
          {timeMusic}
        </div>
      )}

      <div
        style={{
          width: "400px",
          height: "100px",
          position: "fixed",
          fontSize: "3em",
          top: Math.floor(Math.random() * Math.floor(100)) + "%",
          left: Math.floor(Math.random() * Math.floor(100)) + "%",
          color: scroll > 1650 ? "white" : "black",
        }}
        className="opa"
      >
        {timeMusic}
      </div>

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
          <BsPlayFill style={scroll > 1650 ? blackButton : whiteButton} />
        ) : (
          <BsFillPauseFill style={scroll > 1650 ? blackButton : whiteButton} />
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
        <MdSkipNext
          className="next"
          style={scroll > 1650 ? blackButton : whiteButton}
        />
      </button>
      <p
        style={{
          position: "absolute",
          left: "8%",
          textTransform: "uppercase",
          paddingTop: "0.2%",
          color: scroll > 1650 ? "white" : "black",
        }}
      >
        {urlMusic}
      </p>
    </div>
  );
}

export default Music;
