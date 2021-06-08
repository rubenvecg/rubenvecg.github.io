import {DescriptionWindow, DescriptionPanel, IconCont, Text, Slides} from './CardStyle'
import IconGroup from '../Icon/IconGroup'
import {CloseButton} from '../Buttons'
import Deck from '../Slides/Deck'
import Slide from '../Slides/Slide'

const imgPath = 'Resources/img/projects/description/'

const Description = (props) => {

    const generateSlides = () => {
        if(props.screenshots){
            let slides = []

            props.screenshots.forEach((img, index) => {
                slides.push(<Slide deck={props.name} index={index} src={imgPath+img}></Slide>)
            })

            return slides
        }
    }

    return (
        <DescriptionWindow>
            <DescriptionPanel>
                <CloseButton onClick={props.onClose}></CloseButton>

                <Deck name={props.name}>{generateSlides()}</Deck>

                <Text> {props.children}</Text>
                <Text>Category: <b>{props.category}</b></Text>

                <IconCont>
                    <Text>Made with:</Text>
                    <IconGroup className='made-with' types={props.madeWith} size='32' spacing='5'></IconGroup>
                </IconCont>

                {props.link && <a target='_blank' href={props.link}>Open</a>}
            </DescriptionPanel>  
        </DescriptionWindow>
    );
}
 
export default Description;