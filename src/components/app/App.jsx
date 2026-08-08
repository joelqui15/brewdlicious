import React from "react";
import ReactDOM from "react-dom";

import Header from "../header/Header.jsx";
import Hero from "../hero/Hero.jsx";
//import Favorites from "../favorites/Favorites.jsx";
//import Menu from "../menu/Menu.jsx";
//import Gallery from "../gallery/Gallery.jsx";
//import VisitUs from "../visit-us/VisitUs.jsx";
//import Contact from "../contact/Contact.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Hero />
        {/*<Favorites />*/}
        {/*<Menu />*/}
        {/*<Gallery />*/}
        {/*<VisitUs />*/}
        {/*<Contact />*/}
      </div>
    </>
  );
}

export default App;
