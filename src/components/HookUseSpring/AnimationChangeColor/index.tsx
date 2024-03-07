import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const Component = () => {
  const [{ background }] = useSpring(
    () => ({
      from: { background: "var(--step0)" },
      to: [
        { background: "var(--step0)" },
        { background: "var(--step1)" },
        { background: "var(--step2)" },
        { background: "var(--step3)" },
        { background: "var(--step4)" },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );
  return <></>;
};

export default Component;

/*
useSpring retourne une animation animée avec une valeur background qui est utilisée pour animer le fond des éléments. Nous déstructurons cette animation pour obtenir la propriété background.
*/
