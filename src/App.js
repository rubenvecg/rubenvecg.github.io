import React from 'react';
import {Header, About, Projects} from './Sections'
import Background from './Components/Background.js';
import GlowFilter from './Components/GlowFilter.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './Sections/Sections.css'

      

function App() {
AOS.init();
  return (
      <div className="App">
            <Background bgSource='bg.jpg'></Background>
            <GlowFilter></GlowFilter>

            <Header></Header>
            <About></About>
            <Projects></Projects>
      </div>      
  );
}



export default App;
