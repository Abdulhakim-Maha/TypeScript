import React from "react";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
    </div>
  );
}

export default App;
