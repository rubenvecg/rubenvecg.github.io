import React from 'react';
import styled from 'styled-components';
import IconGroup from '../Icon/IconGroup.js';


class Card extends React.Component{

    constructor(props){
        super();
        this.divRef = React.createRef()
        this.state = {
            height: '0px'
        }       
    }

    componentDidMount(){
        this.setState({
            height: this.divRef.current.clientHeight
        });       
    }

    render(){
            const Container = styled.div`
                color: #e6e6ea;
                width: 350px;
                height: auto;
                margin: 0 auto;
                position: relative;
                padding: 1px 20px 10px; 
                
                overflow: hidden;

                -webkit-transition: all 0.5s;
                transition: all 0.5s;

                & h4{
                    margin: 10px;
                }  
                
                &:hover .description-cont{
                    height: 150px;
                    overflow: auto;
                }
            `;

            const Title = styled.h3`
                padding: 10px;
                color: tomato; 
                font-size: 24px;       
                font-weight: normal;
            `;

            const imgPath = 'Resources/img/projects/';
            const Gif = styled.div`
                width: 350px;
                height: 233px;
                margin: 0 auto;        
                background-image: url(${imgPath + this.props.imgName}); 
                background-size: 100% 100%; 
                position: relative;      
            `;

            const Link = styled.div`
                width: 100%;
                height: 100%;
                -webkit-transition: opacity 0.5s;
                background: #222;
                opacity: 0;    
                
                &:hover{
                    opacity: 0.8;
                }

                & .link-cont{
                    width: 100%;
                    height: auto;

                    position: absolute;
                    top: 50%;
                    margin-top: -12px;
                }

                & .link-cont a{
                    color: white;
                    opacity: 1;
                    -webkit-transition: color 0.5s;
                    transition: color 0.5s;
                    text-decoration: none; 
                    font-size: 24px;
                    font-weight: bold;                                              
                }

                & .link-cont a:hover{
                    color: tomato;
                }

                
            `;

            const Text = styled.p`
                text-align: justify; 
                margin-bottom: 0px; 
                margin-top: 5px;
                font-size: 14px;  
                
                & b{
                    color: tomato;
                }
            `;          

            const DescriptionCont = styled.div`
                margin: 0px auto;
                padding-right: 10px;
                height: 0px;
                overflow: hidden; 
                transition: height 0.5s;              
            `;
            
            console.log("+"+this.props.link+"+");
            console.log(this.state.height);
            return (
                <div>
                <Container ref={this.divRef}>
                    
                    <Title>{this.props.title}</Title>

                    <Gif> 
                    <Link>                
                            <div class='link-cont'>
                                <a target='_blank' href={this.props.link}><h3>Open</h3></a>
                            </div>                
                    </Link>
                    </Gif> 

                    <DescriptionCont className='description-cont'>
                        <Text> {this.props.children} </Text>
                        <Text>Category: <b>{this.props.category}</b></Text>

                        <Text>Made with:</Text>
                        <IconGroup types={this.props.madeWith} size='32' spacing='5'></IconGroup>
                    </DescriptionCont>                            
                </Container>

                
                </div>
            );
    }
}
 
export default Card;