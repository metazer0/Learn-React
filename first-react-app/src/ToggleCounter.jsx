import { useState } from "react";
import "./App.css";

export default function ToggleCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0)
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count+1)
  return (
    <div>
    <p className="Toggler" onClick={toggleIsHappy}>
      {isHappy ? "🙂" : "☹️"}
    </p>
    <p onClick={incrementCount}>{count}</p>
    </div>
  );
}
