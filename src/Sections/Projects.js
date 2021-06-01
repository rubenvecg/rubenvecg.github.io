import {useEffect, useState} from 'react'
import Card from '../Components/Card/Card.js'
import Collection from '../Components/Card/Collection.js'
import projects from "../projects.json"

const Projects = () => {

    const Cards = (content) => {
        let cards = []
        content.forEach(c => {
            cards.push(
                <Card title={c['title']}
                      imgName={c['thumbnail']} 
                      madeWith={c['madeWith']}
                      link={c['link']}
                      category={c['category']}>
                    {c['description']}
                </Card>
            )
        })

        return cards
    }

    return (
        <div id='projects' className='section'>
            <h1 className='section-title'>Projects</h1>

            <Collection> 
                {Cards(projects['items'])}          
            </Collection> 
        </div>           
    );
}
 
export default Projects;