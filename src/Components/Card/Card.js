import React from 'react';
import {Background, Container, Link, Title} from './CardStyle.js'
import Description from "./Description"

const imgPath = 'Resources/img/projects/thumbnail/'

class Card extends React.Component{

    constructor(props){
        super();
        this.divRef = React.createRef() 
        this.state = {
            showDescription: false
        }    
    }

    render(){
        return (
            <Container ref={this.divRef}> 
                <Background className='bg' src={imgPath + this.props.thumbnail}></Background>                               
                <Link>
                    <Title>{this.props.title}</Title>
                    <a onClick={() => this.setState({showDescription: true})}>Learn More</a>
                </Link>

                {this.state.showDescription &&
                    <Description
                        name={this.props.title.replace(" ", "-")}
                        category={this.props.category}
                        madeWith={this.props.madeWith}
                        screenshots={this.props.screenshots}
                        link={this.props.link}
                        onClose={() => this.setState({showDescription: false})}>
                        {this.props.children}
                    </Description>
                }
            </Container>
        )
    }
}
 
export default Card;