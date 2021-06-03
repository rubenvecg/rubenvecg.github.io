import {DescriptionWindow, DescriptionPanel, IconCont, Text, Slides} from './CardStyle'
import IconGroup from '../Icon/IconGroup'
import {CloseButton, RightButton, LeftButton} from '../Buttons'

const Description = (props) => {
    return (
        <DescriptionWindow>
            <DescriptionPanel>
                <CloseButton onClick={props.onClose}></CloseButton>

                <Slides>
                    <div style={{background: 'tomato', width:'100%', height: '40vh'}}></div>
                    <RightButton></RightButton>
                    <LeftButton></LeftButton>
                </Slides>

                <Text> {props.children}</Text>
                <Text>Category: <b>{props.category}</b></Text>

                <IconCont>
                    <Text>Made with:</Text>
                    <IconGroup className='made-with' types={props.madeWith} size='32' spacing='5'></IconGroup>
                </IconCont>

                <a href={props.link}>Open</a>
            </DescriptionPanel>  
        </DescriptionWindow>
    );
}
 
export default Description;