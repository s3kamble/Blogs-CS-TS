import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Approuter from './routing/AppRouter';
import Footer from './components/Footer/Footer';
import NavBar  from './components/Nav/Nav';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">

      <NavBar />  
      <Approuter/>
      <Footer />
      
      </div>

    </BrowserRouter>
    
    
  );
}

export default App;
