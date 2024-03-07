import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

const Component = () => {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <>
      <h2>2. Flip card</h2>
      <div className="h-svh" onClick={() => set((state) => !state)}>
        <a.div
          className="squarre bg-indigo-600"
          style={{ opacity: opacity.to((o) => 1 - o), transform }}
        />
        <a.div
          className="squarre bg-yellow-600"
          style={{
            opacity,
            transform,
            rotateY: "180deg",
          }}
        />
      </div>
    </>
  );
};
export default Component;
