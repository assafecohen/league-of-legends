import React from 'react';
import './App.css';
import Champions from './containers/Champions/Champions'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Champions/>
    </div>
  );
}

export default App;
