import React from 'react';
import IconGroup from './Icon/IconGroup.js'
import Card from './Card/Card.js'
import Collection from './Collection/Collection.js'
import './App.css';


function App() {
  return (
      <div className="App">
          <div id='header' className='container'>
                <header className="page-header">
                      <h1>Ruben Vecino</h1>
                      <h3>Aspiring Software Engineer</h3>

                      <div id='personal-links' className='links'>
                            <IconGroup types='linkedin github' size='30' spacing='20'></IconGroup>                
                      </div>
                </header>                
          </div>

          <div id='about'>
                <h1>About me</h1>
                <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla nulla, 
                      viverra in sapien non, congue convallis purus. Donec non neque diam. Vestibulum 
                      euismod tempor odio, eget vestibulum est auctor tincidunt. Duis volutpat in leo 
                      vitae condimentum. Vivamus aliquet lacus eget arcu vulputate, vitae egestas est 
                      tristique. Suspendisse vehicula, libero eget cursus pretium, magna velit egestas 
                      arcu, sit amet aliquet nulla justo et ipsum. Proin auctor, eros non tempus varius, 
                      ante erat efficitur risus, vel dignissim turpis nisl at massa. Phasellus scelerisque 
                      sapien at nisl elementum, id commodo orci congue. Fusce turpis erat, vulputate eget 
                      sem suscipit, commodo posuere mauris. Donec non accumsan odio, sit amet porta nisl. 
                      Fusce vitae finibus lectus. Curabitur nec faucibus elit. Praesent sagittis, lorem a 
                      aliquam fermentum, odio nisi mattis purus, sed convallis lacus ante id justo. Ut sed 
                      nulla mauris. Fusce egestas consequat lacus, vitae dictum sem feugiat in.</p>
          </div>

          <div id='projects'>

            <h1 className='section-title'>Projects</h1>

            <Collection name='Web Development'>
            
               <Card title='CTP Portable Website'imgName='ctp-portable.gif' madeWith='react html css js'
                     link='https://ctp-portable.netlify.app/' source='https://github.com/rubenvecg/CTPportable-website'>
                  This was my first front-end development project using React.js. As part of the ctpHomeHacks hackathon,
                  I collaborated with our team's UX designer to develop this landing page for a task management app we proposed.
                  We wanted to make the site as fun and lively as possible with  different animated elements.
                </Card> 

                <Card title='HSL-RGB Color Picker'imgName='color-picker.gif' madeWith=' html css js'
                     link='https://rubenvecg.github.io/color-picker' source='https://github.com/rubenvecg/color-picker'>
                  This front-end only tool allows to preview, save, edit and remove color references. Sliders adjust their colors 
                  dynamically so the user gets an idea of how the color will look. 
                </Card> 

                <Card title='Responsive Gym Website'imgName='gym-site.gif' madeWith='html css js bootstrap'
                     link='https://rubenvecg.github.io/gym-site' source='https://github.com/rubenvecg/gym-site'>
                  As the final project for my CST 2309 (Web Development) class on Fall 2019, I developed this responsive site 
                  using Bootstrap and CSS media queries, as well as native HTML, CSS and Javascript.
                </Card>         
            
            </Collection> 

            <Collection name='Game Development'>
            
               <Card title='Minesweeper'imgName='minesweeper.gif' madeWith='java'
                     source='https://github.com/rubenvecg/Minesweeper-Java'>
                  I enjoy rebuilding classic games and learning the logic behind them. I implemented the flood fill algorithm 
                  to reveal all empty cells around the one selected by the player. To improve the game experience, the first selected cell as well as 
                  the surrounding ones will always be empty to ensure the player will not press a mine in the beginning.
                </Card>             
            
            </Collection> 

          </div>           
          
        </div>      
  );
}



export default App;
