import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Component = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  return (
    <div className="my-10">
      <h2 className="mb-4">1. Transition animation</h2>
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
        onClick={handleClick}
      ></animated.div>
    </div>
  );
};

export default Component;
