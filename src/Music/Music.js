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
        if (time > 10 && time < 11) {
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
        } else if (time > 168.3 && time < 169.3) {
          setTimeMusic("mieux");
        } else {
          setTimeMusic("");
        }
      }
      //////////// END OF VIBE

      //////////// FOR SUNDANCE
      if (urlMusic === "sundance" && pause === false) {
        if (time > 23 && time < 24) {
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
        } else if (time > 105.5 && time < 106.5) {
          setTimeMusic("trente façons");
        } else {
          setTimeMusic("");
        }
      }
      //////////// END OF SUNDANCE

      //////////// FOR LEMONADE
      if (urlMusic === "lemonade" && pause === false) {
        if (time > 13.9 && time < 14.9) {
          setTimeMusic("tout pour se barrer");
        } else if (time > 15.9 && time < 16.9) {
          setTimeMusic("pour calmer nos nerfs");
        } else if (time > 19.5 && time < 20.5) {
          setTimeMusic("ça s'rait honnête ?");
        } else if (time > 23.5 && time < 24.5) {
          setTimeMusic("lemonade");
        } else if (time > 27.5 && time < 28.5) {
          setTimeMusic("lemo'-lemo");
        } else if (time > 33 && time < 34) {
          setTimeMusic("on pourrait en parler");
        } else if (time > 38.5 && time < 39.5) {
          setTimeMusic("lemonade");
        } else if (time > 45 && time < 46) {
          setTimeMusic("bruit");
        } else if (time > 53 && time < 54) {
          setTimeMusic("city");
        } else if (time > 74.7 && time < 75.7) {
          setTimeMusic("j'coupe mes émotions");
        } else {
          setTimeMusic("");
        }
      }
      //////////// END OF SUNDANCE

      //////////// FOR CROSSFADER
      if (urlMusic === "crossfader" && pause === false) {
        if (time > 2.5 && time < 3.5) {
          setTimeMusic("crossfader");
        } else if (time > 9.7 && time < 10.7) {
          setTimeMusic("ghostwritter");
        } else if (time > 28.4 && time < 29.4) {
          setTimeMusic("one up");
        } else if (time > 31 && time < 32) {
          setTimeMusic("one down");
        } else if (time > 48.5 && time < 49.5) {
          setTimeMusic("les heures");
        } else if (time > 64 && time < 65) {
          setTimeMusic("un coeur");
        } else if (time > 70.7 && time < 71.7) {
          setTimeMusic("ailleurs");
        } else if (time > 82.4 && time < 83.4) {
          setTimeMusic("one up");
        } else if (time > 84.8 && time < 85.8) {
          setTimeMusic("one down");
        } else if (time > 108 && time < 109) {
          setTimeMusic("arianna grande");
        } else if (time > 121.7 && time < 122.7) {
          setTimeMusic("zombies s'approchent");
        } else if (time > 127.1 && time < 128.1) {
          setTimeMusic("puissance des mots");
        } else {
          setTimeMusic("");
        }
      }

      console.log(timeMusic);
      //////////// END OF SUNDANCE
    }, 1000);
    return () => clearInterval(interval);
  }, [urlMusic, pause, timeMusic]);

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
    let audio = document.getElementById("player");
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
            fontSize: "2.6em",
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
