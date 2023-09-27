import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import About from './About';
import Contact from './Contact';
import Menu from './Menu'
import Error from './Error';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Footer from './Footer'; 
import Pizzaday from './Pizzaday';
import Signup from './Signup';
import Burgerking from './Burgerking';



function App() {
  return (
    <>
    <Router>
      <Menu/>    
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/pizzaday' element={<Pizzaday/>}/>
        <Route path='/burgerking' element={<Burgerking/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
