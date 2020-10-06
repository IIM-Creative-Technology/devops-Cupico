import React, {useState} from "react";
import "./Album.css";

function Album() {

  const [album, setAlbum] = useState(["nuits", "disque"]);

  console.log(album[0]);

  return (
    <div className="container-album">
      <a
        href="http://www.75esession.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <div className="kamehouse"> </div>
      </a>
      <div className="album444" onMouseEnter={() => setAlbum(["nuits after", "disque disqueEnter"])} onMouseLeave={() => setAlbum(["nuits before", "disque disqueLeave"])}>
        <div className={album[0]}></div>
        <div className={album[1]}></div>
      </div>
    </div>
  );
}

export default Album;
