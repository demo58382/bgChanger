// import './App.css'
import { useState } from "react";

export default function App() {
  const color = ["red", "green", "blue", "white", "yellow"];
  return (
    <main>
      <h1>Background Changer</h1>

      {color.map((n, i) => (
        <button
          key={i}
          onClick={() => {document.body.style.backgroundColor = n}}
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
    </main>
  );
}
