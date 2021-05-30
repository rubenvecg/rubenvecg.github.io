import React from 'react';
import IconGroup from './Icon/IconGroup.js'
import Card from './Card/Card.js'
import Collection from './Card/Collection.js'
import Photo from './Components/Photo.js'
import Background from './Components/Background.js';
import GlowFilter from './Components/GlowFilter.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

      

function App() {
AOS.init();
  return (
      <div className="App">
      <Background bgSource='bg.jpg'></Background>
      <GlowFilter></GlowFilter>
          <div id='header' className='container'>
                <header className="page-header">
                      <h1>Ruben Vecino</h1>
                      <h3>Aspiring Software Engineer</h3>

                      <div id='personal-links' className='links'>
                            <IconGroup types='linkedin github' size='30' spacing='20'></IconGroup>                
                      </div>
                </header>                
          </div>

          <div id='about' class='section'>
                <h1 className='section-title'>About me</h1>

                  <div id='about-content'>
                        <div data-aos='fade-right' data-aos-duration='1000'>
                              <Photo 
                              id='headshot' width='250px' height='250px' radius='125px' imgSource='photo.jpg'></Photo>
                        </div>

                        <div data-aos='fade-left' data-aos-duration='2000' data-aos-delay='500'>

                        <p class='description'>I am a <b>Computer Systems</b> undergraduate student at the <b>New York City</b> College of Technology.
                        Born in <b>Barranquilla, Colombia</b>, I moved to NYC in 2015 and I am currently looking for internship and/or work
                        opportunities.</p>

                        <p class='description'>Since the moment I wrote my first piece of <b>code</b>, my ever-growing <b>passion</b> for <b>Computer Science</b> has 
                        helped me develop skills such as <b>Web Development</b> and <b>Data Analysis & Visualization</b>. As someone who enjoys taking new challenges,
                        I am always on the look to expand my knowledge and learn new disciplines.</p>
                            
                        </div>                       
                  </div>               
          </div>

          <div id='projects' class='section'>
            <h1 className='section-title'>Projects</h1>

            <Collection> 
            <div>           
               <Card title='CTP Portable Website'imgName='ctp-portable.gif' madeWith='react html css js'
                     link='https://ctp-portable.netlify.app/' category='Web Development'>
                  As part of the ctpHomeHacks hackathon, I collaborated with our team's UX designer to develop this landing page for a task management app we proposed.
                  We wanted to make the site as fun and lively as possible with  different animated elements.
                </Card>

                <Card title='NYC Data Visualization Project' imgName='heatmap.png' madeWith='python'
                      link='https://www.kaggle.com/rubenvecino/distribution-of-buildings-from-before-1995-in-nyc'
                      category='Data Science'>
                  As part of a research project for my PHYS 1002ID class (Introduction to Physics of Natural Disasters), I developed this heatmap
                  showing the percentage of buildings constructed before 1995 by school districts in New York City. I merged datasets from the NYC
                  Departments of Buildings and City Planning to ensure a total of 1,073,550 buildings to study.
                 </Card>
                     
                <Card title='HSL-RGB Color Picker'imgName='color-picker.gif' madeWith='html css js'
                     link='https://rubenvecg.github.io/color-picker' category='Web Development'>
                  This front-end only tool allows to preview, save, edit and remove color references. Sliders adjust their colors 
                  dynamically so the user gets an idea of how the color will look. 
                </Card> 
            </div>

            <div>                     
                <Card title='Responsive Gym Website'imgName='gym-site.gif' madeWith='html css js bootstrap'
                     link='https://rubenvecg.github.io/gym-site' category='Web Development'>
                  As the final project for my CST 2309 (Web Development) class on Fall 2019, I developed this responsive site 
                  using Bootstrap and CSS media queries, as well as native HTML, CSS and Javascript.
                </Card>  
                
                <Card title='Minesweeper'imgName='minesweeper.gif' madeWith='java'
                     link='https://github.com/rubenvecg/Minesweeper-Java' category='Game Development'>
                  I enjoy rebuilding classic games and learning the logic behind them. I implemented the flood fill algorithm 
                  to reveal all empty cells around the one selected by the player. 
                </Card> 
            </div>            
            </Collection> 

          </div>           
          
        </div>      
  );
}



export default App;
