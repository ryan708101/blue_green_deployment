import React, { useState } from "react";
import HomeBlue from "./pages/HomeBlue";
import HomeGreen from "./pages/HomeGreen";
import Navbar from "./components/Navbar";

export default function App() {
  const [env, setEnv] = useState("blue");

  return (
    <div>
      <Navbar env={env} setEnv={setEnv} />
      {env === "blue" ? <HomeBlue /> : <HomeGreen />}
    </div>
  );
}