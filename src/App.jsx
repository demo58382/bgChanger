// import './App.css'
import { useState } from "react";

export default function App() {
  const color = ["red", "green", "blue", "white", "yellow"];
  const [bgcolor, setBgcolor] = useState("white");
  return (
    <div>
      <h1>Background Changer</h1>

      {color.map((n, i) => (
        <button
          key={i}
          onClick={() => setBgcolor(n)}
          style={{ backgroundColor: n, fontSize: "70px" }}
        >
          {/* {(() => {
            switch (n) {
              case "red":
                return "लाल";
              case "green":
                return "हरा";
              case "yellow":
                return "पीला";
              case "white":
                return "सफेद";
              case "blue":
                return "नीला";
              default:
                return n;
            }
          })()} */}
          {n}
        </button>
      ))}

      <style>
        {`
          body {
            background-color: ${bgcolor};
          }
        `}
      </style>
    </div>
  );
}
