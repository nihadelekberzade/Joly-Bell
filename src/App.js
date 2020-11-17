import React from "react";
import "./sass/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Slogan from "./components/Slogan";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
