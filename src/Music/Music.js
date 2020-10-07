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
  const [pause, setPause] = useState(true);
  const [timeMusic, setTimeMusic] = useState("");

  useEffect(() => {
    const audio = document.getElementById("player");
    audio.volume = 0.1;

    const interval = setInterval(() => {
      let time = audio.currentTime;

      //////////// FOR VIBE
      if (urlMusic === "vibe" && pause === false) {
        if (time > 1 && time < 3) {
          setTimeMusic("test");
        } else if (time > 10 && time < 11) {
          setTimeMusic("VIBE");
        } else if (time > 16 && time < 17) {
          setTimeMusic("VIBE");
        } else if (time > 24.5 && time < 26) {
          setTimeMusic("Si j'ai capte une vibe");
        } else if (time > 39.5 && time < 41) {
          setTimeMusic("la la la la la la...");
        } else if (time > 56 && time < 57) {
          setTimeMusic("la la la la la la...");
        } else if (time > 69 && time < 70) {
          setTimeMusic("mais");
        } else if (time > 113 && time < 114) {
          setTimeMusic("vibe");
        } else if (time > 147.5 && time < 148.5) {
          setTimeMusic("vengance");
        } else if (time > 153.5 && time < 154.5) {
          setTimeMusic("aie");
        } else if (time > 167 && time < 168) {
          setTimeMusic("bien");
        } else if (time > 168 && time < 169) {
          setTimeMusic("mieux");
        }
      } else {
        setTimeMusic("");
      }
      //////////// END OF VIBE
      console.log(time);
      //////////// FOR SUNDANCE
      if (urlMusic === "sundance" && pause === false) {
        if (time > 1 && time < 3) {
          setTimeMusic("test");
        } else if (time > 23 && time < 24) {
          setTimeMusic("du lundi au sunday");
        } else if (time > 25.5 && time < 26.5) {
          setTimeMusic("sundance");
        } else if (time > 29 && time < 30) {
          setTimeMusic("ennuis");
        } else if (time > 36 && time < 37) {
          setTimeMusic("pu l'faire");
        } else if (time > 44 && time < 45) {
          setTimeMusic("autres");
        } else if (time > 45 && time < 46) {
          setTimeMusic("autres");
        } else if (time > 46 && time < 47) {
          setTimeMusic("autres");
        } else if (time > 66.5 && time < 67) {
          setTimeMusic("injustice");
        } else if (time > 77 && time < 78) {
          setTimeMusic("histoires");
        } else if (time > 86.5 && time < 87.5) {
          setTimeMusic("Hermann Hess");
        }
        else if (time > 105.5 && time < 106.5) {
          setTimeMusic("trente façons");
        }
      } else {
        setTimeMusic("");
      }
      //////////// END OF SUNDANCE
    }, 1000);
    return () => clearInterval(interval);
  }, [urlMusic, pause]);

  const pausePlay = () => {
    setTimeMusic("");
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
            top: Math.floor(Math.random() * Math.floor(80)) + "%",
            left: Math.floor(Math.random() * Math.floor(80)) + "%",
            color: "black",
          }}
          className="animeword"
        >
          {timeMusic}
        </div>
      )}

      {/*<div
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
      </div>*/}

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
        <MdSkipNext
          className="next"
          style={{ color: "black", fontSize: "4em" }}
        />
      </button>
      <p
        style={{
          position: "absolute",
          left: "8%",
          textTransform: "uppercase",
          paddingTop: "0.2%",
          color: "black",
        }}
      >
        {urlMusic}
      </p>
    </div>
  );
}

export default Music;
