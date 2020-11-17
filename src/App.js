import React from "react";
import "./sass/css/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Slogan from "./components/Slogan";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Slogan />
      <Footer />
    </>
  );
}

export default App;
