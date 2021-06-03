import React from 'react';
import styled from 'styled-components';

class Collection extends React.Component {

    constructor(props) {
        super();        
    }

    render(){
        const Container = styled.div`
            margin: 0 auto;
            padding-top: 10px;
            display: flex;                
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: start;
            width: 800px;  
            
            @media only screen and (max-width: 800px) {
                width: 300px;
            }
            `;            

        return ( 
            <Container>
                {this.props.children}
            </Container>
        );
    }
    
    
}
 
export default Collection;