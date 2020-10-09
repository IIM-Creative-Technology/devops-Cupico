import React from "react";
import { useTrail, animated } from "react-spring";
import "./AdiosBahamas.css";

const items = ["A", "d", "i", "o", "s", "B", "a", "h", "a", "m", "a", "s"];
const config = { mass: 5, tension: 1450, friction: 200 };

export default function AdiosBahamas() {
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: -100, height: 0 },
    delay: 1200,
  });

  return (
    <div className="trails-main">
      <div className="align-letter">
        {trail.map(({ x, height, ...rest }, index) => (
          <div
            key={index}
            className={`trails-text letter${index}`}
          
          >
      
          </div>
        ))}
      </div>
    </div>
  );
}

