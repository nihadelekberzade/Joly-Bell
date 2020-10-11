import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
