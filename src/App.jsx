import { useState } from "react";
import AnimationFlipCard from "./components/HookUseSpring/AnimationFlipCard";
import AnimationTransition from "./components/HookUseSpring/AnimationTransition";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1 className="text-red-600 text-center">React Spring</h1>
      </header>
      <main>
        <AnimationTransition />
        <AnimationFlipCard />
      </main>
    </>
  );
}

export default App;
