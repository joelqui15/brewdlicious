import React from "react";
import ReactDOM from "react-dom";

import Header from "../header/Header.jsx";
import Main from "../Main/Main.jsx";

import { favoriteMenuItems } from "../../utils/constants.js";
import "./App.css";

function App() {
  function openPreview() {}
  return (
    <>
      <div className="page">
        <Header />
        <Main favoriteMenuItems={favoriteMenuItems} />
      </div>
    </>
  );
}

export default App;
