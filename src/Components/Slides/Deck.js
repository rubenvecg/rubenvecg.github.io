import {useState} from 'react'
import {DeckContainer, Slides} from './SlidesStyle'
import {LeftButton, RightButton} from '../Buttons'

const Deck = ({name, children}) => {
    const [current, setCurrent] = useState(0)

    const next = () => {
        if(current == children.length - 1)
            setCurrent(0)
        else
            setCurrent(current + 1)
    }

    const prev = () => {
        if(current == 0)
            setCurrent(children.length - 1)
        else
            setCurrent(current - 1)
    }

    window.location = `#${name}-slide${current}`

    return (
        <DeckContainer>
            <Slides>
                {children}
            </Slides>

            {children.length > 1 && <RightButton onClick={() => next()}></RightButton>}
            {children.length > 1 && <LeftButton  onClick={() => prev()}></LeftButton>}

            </DeckContainer>
    )
}
 
export default Deck;