import React, { useState } from "react";
import "./Nepal.css";

import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

function Nepal() {
  const [grandMaster, setGrandMaster] = useState(false);

  const reveal = () => {
    const state = grandMaster;
    setGrandMaster(!state);
  };

  return (
    <div className="container-nepal">
      <div className="info" onClick={reveal}>
        {grandMaster ? <AiFillCloseCircle /> : <BsInfoCircleFill />}
      </div>
      <div className="container-liens">
        {grandMaster && (
          <div className="try">
            <div className="splinter" />
            <div>
              <ul>
                <a
                  href="https://www.youtube.com/channel/UCdWGxWejEXZrKMz8Br37Glg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="yt"></li>
                </a>
                <a
                  href="https://open.spotify.com/artist/1E8w172gkuT5htpwaIEsEl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="spotify"></li>
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nepal;
