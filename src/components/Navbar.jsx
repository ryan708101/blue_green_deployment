import React from "react";

export default function Navbar({ env, setEnv }) {
  return (
    <div className="navbar">
      <h2>Blue-Green Deployment Demo</h2>

      <div className="buttons">
        <button
          className={env === "blue" ? "active blue" : ""}
          onClick={() => setEnv("blue")}
        >
          Blue (Live)
        </button>

        <button
          className={env === "green" ? "active green" : ""}
          onClick={() => setEnv("green")}
        >
          Green (New)
        </button>
      </div>
    </div>
  );
}