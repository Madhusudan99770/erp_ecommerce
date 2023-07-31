import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from './Components/Template';

import "./assets/css/all.min.css"
import "./assets/css/owl.carousel.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/animate.css"
import "./assets/css/meanmenu.min.css"
import "./assets/css/main.css"
import "./assets/css/responsive.css"
import "./assets/bootstrap/css/bootstrap.min.css"
import Login from './Components/Login';
import Contact from './Components/Contact';
import ModalFile from './Components/ModalFile';

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/ModalFile" element={<ModalFile/>} />
        <Route path="/Contact" element={<Contact/>} />

       
      </Routes>
    </BrowserRouter>
      </div>
    );
  }
}

export default App;
