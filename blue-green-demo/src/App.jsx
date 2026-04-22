import React, { useState } from "react";
import HomeBlue from "./pages/HomeBlue.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [env, setEnv] = useState("blue");

  return (
    <div>
      <Navbar env={env} setEnv={setEnv} />
      { <HomeBlue />}
    </div>
  );
}