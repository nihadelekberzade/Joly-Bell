import React from 'react';
import './reset.css'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main';
import Slogan from './components/Slogan/Slogan';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
