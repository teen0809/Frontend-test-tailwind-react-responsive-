import React from "react";
import "./App.css";
import Body from "./component/layout/body/Body";
import Header from "./component/layout/header/Header";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-specialWhite font-Epilogue">
      <Header />
      <Body />
    </div>
  );
}

export default App;
