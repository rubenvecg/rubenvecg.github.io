import React from 'react';
import styled from 'styled-components';

const Icon = (props) => { 

    const site = {
        linkedin: 'https://www.linkedin.com/in/ruben-vecino',
        github:   'https://www.github.com/rubenvecg'
    };

    const imgSource = 'Resources/img/icons/' + props.type + '.png';

    const Container = styled.div`
        width: ${props.width}px;
        height: ${props.height}px;
        background-image: url(${imgSource}); 
        background-size: cover; 
        margin: 0 auto;          
    `;

    return (
        <a target='_blank' href={site[props.type]}>
            <Container></Container>
        </a>                
    );
}
 
export default Icon;