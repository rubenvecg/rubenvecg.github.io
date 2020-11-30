import React from 'react';
import styled from 'styled-components';
import IconGroup from '../Icon/IconGroup.js';


const Card = (props) => {

    const Container = styled.div`
        background: #050808;
        color: #e6e6ea;
        width: 350px;
        height: auto;
        margin: 0 auto 20px;
        position: relative;
        padding: 1px 20px 10px;
        border-radius: 30px;
        border: 1px solid transparent;

        -webkit-transition: border 0.5s;
        transition: border 0.5s;

        &:hover{
            border: 1px solid tomato;
        }

        & h4{
            margin: 10px;
        }


    `;

    const imgPath = 'Resources/img/projects/';
    const Gif = styled.div`
        width: 300px;
        height: 200px;
        margin: 0 auto;        
        background-image: url(${imgPath + props.imgName}); 
        background-size: 100% 100%;       
    `;

    const Link = styled.p`
        text-align: center;

        & a{
            color: white;
            -webkit-transition: color 0.5s;
            transition: color 0.5s;
        }

        & a:hover{
            color: tomato;
        }
    `;

    const Text = styled.p`
        text-align: justify; 
        margin-bottom: 0px;       
    `;

    const DescriptionCont = styled.div`
        height: 150px;
    `;

    const linkText =  (props.link === undefined) ? "" : "Link";
    
    const separator = (props.link === undefined) ? "" : "|";
    
    console.log("+"+props.link+"+");
    return (
        <Container>
            <h4>{props.title}</h4>

            <Gif></Gif> 
            <Link>
                <a target='_blank' href={props.link}>{linkText}</a> {separator} <a target='_blank' href={props.source}>Source</a>
            </Link>

            <DescriptionCont>
                <Text> {props.children} </Text>
            </DescriptionCont>

            <Text>Made with:</Text>
            <IconGroup types={props.madeWith} size='32' spacing='5'></IconGroup>

        </Container>
    );
}
 
export default Card;