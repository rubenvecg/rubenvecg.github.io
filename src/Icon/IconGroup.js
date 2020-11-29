import React from 'react';
import Icon from './Icon.js'
import styled from 'styled-components';

const IconGroup = (props) => {   

    const icons = props.types.split(" ");
    const iconsHTML = [];

    for(var i = 0; i < icons.length; i++){
        iconsHTML.push(<Icon type={icons[i]} width={props.size} height={props.size}></Icon>);
    }

    const Group = styled.div`
        display: grid;
        grid-template-columns: repeat(${icons.length}, ${props.size}px);
        grid-template-rows: ${props.size}px;
        grid-gap: ${props.spacing}px;
        justify-content: center; 
        margin: 0 auto;       
    `;

    return (
        <Group>{iconsHTML}</Group>
    );
}
 
export default IconGroup;