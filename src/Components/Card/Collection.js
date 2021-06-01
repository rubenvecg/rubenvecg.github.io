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
                display: grid;                
                grid-gap: 10px;
                justify-content: center;
                align-items: start;
                width: 100%;

                @media only screen and (min-width: 800px) {
                    & {
                        grid-template-columns: repeat(2, 350px);
                    }
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