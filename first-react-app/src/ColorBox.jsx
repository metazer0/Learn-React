import "./ColorBox.css";
import { useState } from "react";

export default function ColorBox({ colors }) {
  const randomColor = () => {
    const idx = Math.floor(Math.random() * colors.length);
    const rand = colors[idx];
    return rand
  };
  const [color, setColor] = useState(randomColor);
  const changeColor = () => {
    setColor(randomColor);
  };
  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}

Lecture thumbnail
