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

                      <div className='links'>
                            <IconGroup types='linkedin github' size='30' spacing='20'></IconGroup>                
                      </div>
                </header>                
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

                <Card title='CTP Portable Website'imgName='ctp-portable.gif' madeWith='react html css js'
                     link='https://ctp-portable.netlify.app/' source='https://github.com/rubenvecg/CTPportable-website'>
                  This was my first front-end development project using React.js. As part of the ctpHomeHacks hackathon,
                  I collaborated with our team's UX designer to develop this landing page for a task management app we proposed.
                  We wanted to make the site as fun and lively as possible with  different animated elements.
                </Card> 

                <Card title='CTP Portable Website'imgName='ctp-portable.gif' madeWith='react html css js'
                     link='https://ctp-portable.netlify.app/' source='https://github.com/rubenvecg/CTPportable-website'>
                  This was my first front-end development project using React.js. As part of the ctpHomeHacks hackathon,
                  I collaborated with our team's UX designer to develop this landing page for a task management app we proposed.
                  We wanted to make the site as fun and lively as possible with  different animated elements.
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
