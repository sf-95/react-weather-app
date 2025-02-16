import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Sarah Farchoukh and is
          <a
            href="https://github.com/sf-95/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
